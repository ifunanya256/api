import { Request, Response } from "express";
import { UpdateCarsDto, updateCarsDto} from "../../dto/cars/cars.dto"; 

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
  private carsList: Cars[] = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      year: 2010,
      color: "Black",
      price: 700900000,
      isAvailable: true,
      description: "A clean and comfortable sedan",
    },
    {
      id: 2,
      brand: "Mercedes Benz",
      model: "C300",
      year: 2021,
      color: "White",
      price: 350000000,
      isAvailable: true,
      description: "A luxury executive sedan",
    },
    {
      id: 3,
      brand: "Honda",
      model: "Accord",
      year: 2020,
      color: "Silver",
      price: 180000000,
      isAvailable: false,
      description: "A reliable family car",
    },
    {
      id: 4,
      brand: "Lexus",
      model: "RX350",
      year: 2023,
      color: "Blue",
      price: 550000000,
      isAvailable: true,
      description: "A luxury SUV",
    },
  ];

  createCars(req: Request, res: Response) {}

  getAllCars(req: Request, res: Response) {
    const total = this.carsList.length;

    return {
      total,
      data: this.carsList,
    };
  }

  getSingleCars(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const Cars = this.carsList.filter((cars) => cars.id === numberId);

    return {
      message: Cars.length > 0 ? "Car found" : "Car not found",
      data: Cars[0],
    };
  }

  deleteSingleCars(req: Request, res: Response) {
    const { id } = req.params;
    const numberedId = Number(id);

    const Cars = this.carsList.find((cars) => {
      return cars.id === numberedId;
    });

    if (!Cars) {
      return {
        message: `Couldn't find car with id: ${id}`,
      };
    }

    const updatedCars = this.carsList.filter((cars) => {
      return cars.id != numberedId;
    });

    return updatedCars;
  }

  updateSingleCars(req: Request, res: Response) {
    const { id } = req.params;
    const numberedId = Number(id);

    const reqBody = req.body as UpdateCarsDto

    const cars = this.carsList.find((cars) => {
      return cars.id === numberedId;
    });

    if (!cars) {
      return {
        message: `couldn't find car with id: ${id}`,
      };
    }

    if (reqBody.brand) {
      cars.brand = reqBody.brand;
    }

    if (reqBody.model) {
      cars.model = reqBody.model;
    }

    if (reqBody.year) {
      cars.year = reqBody.year;
    }

    if (reqBody.isAvailable != undefined) {
      cars.isAvailable = reqBody.isAvailable;
    }

    if (reqBody.color) {
      cars.color = reqBody.color;
    }

    if (reqBody.price) {
      cars.price = reqBody.price;
    }

    if (reqBody.description) {
      cars.description = reqBody.description;
    }

    return {
      message: "Update completed",
      data: cars,
    };
  }
}
