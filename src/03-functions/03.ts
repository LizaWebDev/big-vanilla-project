import {StudentType} from "../02-objects/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

sum(1, 3)
sum(sum(1, 2), sum(2, 3))

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    // return "Hello " + city.title + " citizens. I want you be happy. All " + city.citizensNumber + " people"
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}