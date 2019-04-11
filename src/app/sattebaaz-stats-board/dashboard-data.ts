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
            weight: '152.91 INR'
        },
        {
            name : 'Pratik',
            weight: '90.92 INR'
        },
        {
            name : 'Kailash',
            weight: '61.25 INR'
        },
        {
            name : 'Radhika',
            weight: '49.58 INR'
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
            name : 'Tushar',
            weight : '-95.75 INR'
        },
        {
            name : 'Neha',
            weight : '-93.75 INR'
        },
        {
            name : 'Param',
            weight : '-93.34 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}