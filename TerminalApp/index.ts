import * as readline from "readline-sync";
import { Trainer } from "./types";
// let trainers : Trainer[] = []
async function main() {
  const trainerData = await getData();
  let exitProgram = false;
  console.log("Welcome to the pokemon trainer JSON viewer!");
  while (!exitProgram) {
    const menu: string[] = ["1:View all data", "2:Filter data by ID", "3:Exit"];
    for (let i = 0; i < menu.length; i++) {
      console.log(`${menu[i]}`);
    }

    let choice: number = readline.questionInt("Please select an option.");
    console.log(`You have selected option ${menu[choice - 1]}`);
    switch (choice) {
      case 1:
        if (trainerData) {
          trainerData.forEach((trainer) => {
            console.log(`ID: ${trainer.id}, Name: ${trainer.name}`);
          });
        } else {
          console.log("No data available.");
        }
        break;
      case 2:
        let id: number = readline.questionInt("Please give an ID: ");
        let result = filterByid(trainerData, id);
        console.log(result);

        break;
      case 3:
        console.log("Jammer dat u gaat, vaarwel :(");
        exitProgram = true;
        break;
    }
  }
}
function filterByid(trainerData: Trainer[] | undefined, id: number) {
  return trainerData?.find((trainer) => trainer.id === id);
}

async function getData(): Promise<Trainer[] | undefined> {
  const url =
    "https://raw.githubusercontent.com/Jalanreke/Pokemon-Data-WebOntwikkeling/refs/heads/main/Pokemon-Data/Pokemonn-Data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const trainers: Trainer[] = await response.json();
    return trainers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}
main();

//   if (trainerData) {
//     console.log("Success! Trainers:", trainerData);
//   } else {
//     console.log("Failed to load trainers.");
//   }

//   trainerData?.forEach((trainer) => {
//     console.log(trainer.name);
//   });
export {};
