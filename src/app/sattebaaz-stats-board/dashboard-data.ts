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
            name : 'Suraj',
            weight: '172.91 INR'
        },
        {
            name : 'Kalpesh',
            weight: '164.58 INR'
        },
        {
            name : 'Pratik',
            weight: '75.92 INR'
        },
        {
            name : 'Kailash',
            weight: '61.25 INR'
        },
        {
            name : 'Manasi',
            weight: '35.00 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Shruti',
            weight : '-97.50 INR'
        },
        {
            name : 'Neha',
            weight : '-93.75 INR'
        },
        {
            name : 'Neeraj',
            weight : '-87.00 INR'
        },
        {
            name : 'Tushar',
            weight : '-85.75 INR'
        },
        {
            name : 'Param',
            weight : '-73.34 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}