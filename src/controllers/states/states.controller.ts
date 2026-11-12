import { Request, Response } from "express";
import { statesTable } from "../../db/states.schema";
import { CreateStatesDTO } from "../../dto/states/states.dto";
import { count, eq } from "drizzle-orm";
import { db } from "../../config/db";

interface States {
  id: number;
  name: string;
  capital: string;
  geopoliticalZone: string;
}

export class StatesController {
  async createState(req: Request, res: Response) {
    const requestBody = req.body as CreateStatesDTO;

    const statesInsert: typeof statesTable.$inferInsert = {
      name: requestBody.name,
      capital: requestBody.capital,
      geopoliticalZone: requestBody.geopoliticalZone,
    };

    await db.insert(statesTable).values(statesInsert);

    return {
      message: "You have created a new state",
      data: statesInsert,
    };
  }

  async getAllStates(req: Request, res: Response) {
    const states = await db.select().from(statesTable);
    const total = await db.select({ count: count() }).from(statesTable);

    return {
      message: "response successful",
      data: states,
      total: total[0].count,
    };
  }

  async getSingleToDo(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const states = await db
      .select()
      .from(statesTable)
      .where(eq(statesTable.id, numberId));

    return {
      message: `state with id:${id} retrieved`,
      data: states[0],
    };
  }
}
