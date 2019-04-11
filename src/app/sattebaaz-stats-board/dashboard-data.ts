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
            weight: '189.58 INR'
        },
        {
            name : 'Suraj',
            weight: '142.91 INR'
        },
        {
            name : 'Kailash',
            weight: '141.25 INR'
        },
        {
            name : 'Pratik',
            weight: '80.92 INR'
        },
        {
            name : 'Radhika',
            weight: '39.58 INR'
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
            name : 'Param',
            weight : '-103.34 INR'
        },
        {
            name : 'Tushar',
            weight : '-95.75 INR'
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