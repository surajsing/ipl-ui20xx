import { Injectable } from "@angular/core";

export interface PeriodicElements {
    name: string,
    weight: string
}
@Injectable({
    providedIn: 'root'
})
export class DashboardData {

    public topFiveContestant: PeriodicElements[] = [
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        }
    ]

    public bottomFiveContestant: PeriodicElements[] = [
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        },
        {
            name: '',
            weight: ''
        }
    ]

    getTopFiveContestant() {
        return this.topFiveContestant;
    }

    getBottomFiveContestant() {
        return this.bottomFiveContestant;
    }

}