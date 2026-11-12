import { Request, Response } from "express";
import {
  CreateCarsDTO,
  UpdateCarsDto,
  updateCarsDto,
} from "../../dto/cars/cars.dto";
import { carsTable } from "../../db/carsdb/cars.schema";
import { db } from "../../config/db";
import { count, eq } from "drizzle-orm";

interface Cars {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  isAvailable: boolean;
  description?: string;
}

export class CarsController {
  async createCars(req: Request, res: Response) {
    const requestBody = req.body as CreateCarsDTO;

    const carsInsert: typeof carsTable.$inferInsert = {
      brand: requestBody.brand,
      model: requestBody.model,
      year: requestBody.year,
      color: requestBody.color,
      price: requestBody.price,
      isAvailable: requestBody.isAvailable,
      description: requestBody.description,
    };

    await db.insert(carsTable).values(carsInsert);
    return {
      message: "New car information assigned",
      data: carsInsert,
    };
  }

  async getAllCars(req: Request, res: Response) {
    const cars = await db.select().from(carsTable);
    const total = await db.select({ count: count() }).from(carsTable);

    return {
      message: "response successful",
      data: cars,
      total: total[0].count,
    };
  }

  async getSingleCar(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const car = await db
      .select()
      .from(carsTable)
      .where(eq(carsTable.id, numberId));

    return {
      message: `car with id:${id} retrieved`,
      data: car[0],
    };
  }
}
