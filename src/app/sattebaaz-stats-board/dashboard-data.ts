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
            name : 'Kailash',
            weight: '191.25 INR'
        },
        {
            name : 'Kalpesh',
            weight: '179.58 INR'
        },
        {
            name : 'Suraj',
            weight: '132.91 INR'
        },
        {
            name : 'Pratik',
            weight: '70.92 INR'
        },
        {
            name : 'Radhika',
            weight: '59.58 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Param',
            weight : '-113.34 INR'
        },
        {
            name : 'Shruti',
            weight : '-107.50 INR'
        },
        {
            name : 'Neeraj',
            weight : '-107.00 INR'
        },
        {
            name : 'Tushar',
            weight : '-105.75 INR'
        },
        {
            name : 'Neha',
            weight : '-93.75 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}