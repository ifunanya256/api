import { Request, Response } from "express";

interface States {
  id: number;
  name: string;
  capital: string;
  geopoliticalZone: string;
}

export class StatesController {
  private statesList: States[] = [
    { id: 1, name: "Abia", capital: "Umuahia", geopoliticalZone: "South East" },
    { id: 2, name: "Adamawa", capital: "Yola", geopoliticalZone: "North East" },
    {
      id: 3,
      name: "Akwa Ibom",
      capital: "Uyo",
      geopoliticalZone: "South South",
    },
    { id: 4, name: "Anambra", capital: "Awka", geopoliticalZone: "South East" },
    {
      id: 5,
      name: "Bauchi",
      capital: "Bauchi",
      geopoliticalZone: "North East",
    },
    {
      id: 6,
      name: "Bayelsa",
      capital: "Yenagoa",
      geopoliticalZone: "South South",
    },
    {
      id: 7,
      name: "Benue",
      capital: "Makurdi",
      geopoliticalZone: "North Central",
    },
    {
      id: 8,
      name: "Borno",
      capital: "Maiduguri",
      geopoliticalZone: "North East",
    },
    {
      id: 9,
      name: "Cross River",
      capital: "Calabar",
      geopoliticalZone: "South South",
    },
    {
      id: 10,
      name: "Delta",
      capital: "Asaba",
      geopoliticalZone: "South South",
    },
    {
      id: 11,
      name: "Ebonyi",
      capital: "Abakaliki",
      geopoliticalZone: "South East",
    },
    {
      id: 12,
      name: "Edo",
      capital: "Benin City",
      geopoliticalZone: "South South",
    },
    {
      id: 13,
      name: "Ekiti",
      capital: "Ado-Ekiti",
      geopoliticalZone: "South West",
    },
    { id: 14, name: "Enugu", capital: "Enugu", geopoliticalZone: "South East" },
    { id: 15, name: "Gombe", capital: "Gombe", geopoliticalZone: "North East" },
    { id: 16, name: "Imo", capital: "Owerri", geopoliticalZone: "South East" },
    {
      id: 17,
      name: "Jigawa",
      capital: "Dutse",
      geopoliticalZone: "North West",
    },
    {
      id: 18,
      name: "Kaduna",
      capital: "Kaduna",
      geopoliticalZone: "North West",
    },
    { id: 19, name: "Kano", capital: "Kano", geopoliticalZone: "North West" },
    {
      id: 20,
      name: "Katsina",
      capital: "Katsina",
      geopoliticalZone: "North West",
    },
    {
      id: 21,
      name: "Kebbi",
      capital: "Birnin Kebbi",
      geopoliticalZone: "North West",
    },
    {
      id: 22,
      name: "Kogi",
      capital: "Lokoja",
      geopoliticalZone: "North Central",
    },
    {
      id: 23,
      name: "Kwara",
      capital: "Ilorin",
      geopoliticalZone: "North Central",
    },
    { id: 24, name: "Lagos", capital: "Ikeja", geopoliticalZone: "South West" },
    {
      id: 25,
      name: "Nasarawa",
      capital: "Lafia",
      geopoliticalZone: "North Central",
    },
    {
      id: 26,
      name: "Niger",
      capital: "Minna",
      geopoliticalZone: "North Central",
    },
    {
      id: 27,
      name: "Ogun",
      capital: "Abeokuta",
      geopoliticalZone: "South West",
    },
    { id: 28, name: "Ondo", capital: "Akure", geopoliticalZone: "South West" },
    { id: 29, name: "Osun", capital: "Osogbo", geopoliticalZone: "South West" },
    { id: 30, name: "Oyo", capital: "Ibadan", geopoliticalZone: "South West" },
    {
      id: 31,
      name: "Plateau",
      capital: "Jos",
      geopoliticalZone: "North Central",
    },
    {
      id: 32,
      name: "Rivers",
      capital: "Port Harcourt",
      geopoliticalZone: "South South",
    },
    {
      id: 33,
      name: "Sokoto",
      capital: "Sokoto",
      geopoliticalZone: "North West",
    },
    {
      id: 34,
      name: "Taraba",
      capital: "Jalingo",
      geopoliticalZone: "North East",
    },
    {
      id: 35,
      name: "Yobe",
      capital: "Damaturu",
      geopoliticalZone: "North East",
    },
    {
      id: 36,
      name: "Zamfara",
      capital: "Gusau",
      geopoliticalZone: "North West",
    },
    {
      id: 37,
      name: "FCT",
      capital: "Abuja",
      geopoliticalZone: "North Central",
    },
  ];

  createState(req: Request, res: Response) {}

  getAllStates(req: Request, res: Response) {
    const total = this.statesList.length;

    return {
      total,
      data: this.statesList,
    };
  }

  getSingleState(req: Request, res: Response) {
    const { id } = req.params
    const numberId = Number(id)

    const states = this.statesList.filter((states) => states.id === numberId)

    return{
        message: states.length > 0 ? "State Found" : "State Not Found",
        data: states[0]
    }
  }
}
