import { api } from "@/lib/axios"

export interface IRegisterRestaurant {
    restaurantName: string
    managerName: string
    email: string
    phone: string
}

export async function registerRestaurant(body: IRegisterRestaurant) {

    await api.post('restaurants', body)

}