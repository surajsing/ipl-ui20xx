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
            weight: '199.58 INR'
        },
        {
            name : 'Suraj',
            weight: '162.91 INR'
        },
        {
            name : 'Kailash',
            weight: '61.25 INR'
        },
        {
            name : 'Radhika',
            weight: '59.58 INR'
        },
        {
            name : 'Pratik',
            weight: '55.92 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Shruti',
            weight : '-107.50 INR'
        },
        {
            name : 'Neeraj',
            weight : '-107.00 INR'
        },
        {
            name : 'Neha',
            weight : '-93.75 INR'
        },
        {
            name : 'Tushar',
            weight : '-85.75 INR'
        },
        {
            name : 'Param',
            weight : '-83.34 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}