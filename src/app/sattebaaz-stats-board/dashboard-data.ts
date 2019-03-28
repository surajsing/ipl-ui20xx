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
            weight: '66.67 INR'
        },
        {
            name : 'Pooja',
            weight: '43.33 INR'
        },
        {
            name : 'Kailash',
            weight: '37.50 USD'
        },
        {
            name : 'Snehal',
            weight: '14.17 INR'
        },
        {
            name : 'Radhika',
            weight: '14.17 INR'
        }
    ]

    public bottomFiveContestant : PeriodicElements[] = [
        {
            name : 'Siddhhu',
            weight : '-50.00 INR'
        },
        {
            name : 'Neha',
            weight : '-32.50 INR'
        },
        {
            name : 'Tushar',
            weight : '-32.50 USD'
        },
        {
            name : 'Param',
            weight : '-15.00 INR'
        },
        {
            name : 'Shruti',
            weight : '-15.00 INR'
        }
    ]

    getTopFiveContestant(){
        return this.topFiveContestant;
    }

    getBottomFiveContestant(){
        return this.bottomFiveContestant;
    }

}