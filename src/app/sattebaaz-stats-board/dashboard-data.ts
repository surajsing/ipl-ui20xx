import { Injectable } from "@angular/core";

export interface PeriodicElements{
    name : string,
    weight : string
}
@Injectable({
    providedIn : 'root'
})
export class DashboardData{

    public topFiveContestant : PeriodicElements[] = [
        {
            name : 'Kalpesh',
            weight: '191.67 INR'
        },
        {
            name : 'Suraj',
            weight: '118.75 INR'
        },
        {
            name : 'Kailash',
            weight: '111.25 INR'
        },
        {
            name : 'Manasi',
            weight: '22.50 INR'
        },
        {
            name : 'Pooja',
            weight: '1.33 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Neha',
            weight : '-83.75 INR'
        },
        {
            name : 'Radhika',
            weight : '-55.83 INR'
        },
        {
            name : 'Tushar',
            weight : '-55.75 INR'
        },
        {
            name : 'Siddhu',
            weight : '-50.00 INR'
        },
        {
            name : 'Neeraj',
            weight : '-47.00 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}