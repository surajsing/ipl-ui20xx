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
            weight: '192.91 INR'
        },
        {
            name : 'Kalpesh',
            weight: '174.58 INR'
        },
        {
            name : 'Pratik',
            weight: '95.92 INR'
        },
        {
            name : 'Kailash',
            weight: '81.25 INR'
        },
        {
            name : 'Manasi',
            weight: '35.00 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Neha',
            weight : '-93.75 INR'
        },
        {
            name : 'Shruti',
            weight : '-87.50 INR'
        },
        {
            name : 'Neeraj',
            weight : '-87.00 INR'
        },
        {
            name : 'Tushar',
            weight : '-75.75 INR'
        },
        {
            name : 'Param',
            weight : '-63.34 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}