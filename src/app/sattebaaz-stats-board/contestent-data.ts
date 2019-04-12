import { Injectable } from "@angular/core";

export interface Contestant {
    sequence : number,
    name : {
        firstName : string,
        lastName : string
    },
    role : string,
    currentHoldingLabel : string,
    currentHoldingValue : string
}

@Injectable({
    providedIn : 'root'
})
export class ContestantData {
    constructor(){

    }
    public contestants : Contestant [] = [
        {
            sequence : 1,
            name: {
                firstName : 'Suraj',
                lastName : 'Singh'
            },
            role: 'Admin',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '132.91 INR'
        },
        {
            sequence : 2,
            name: {
                firstName : 'Kailash',
                lastName : 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '191.25 INR'
        },
        {
            sequence : 3,
            name: {
                firstName : 'Kalpesh',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '179.58 INR'
        },
        {
            sequence : 4,
            name: {
                firstName : 'Neeraj',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-107.00 INR'
        },
        {
            sequence : 5,
            name: {
                firstName : 'Pooja',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '21.33 INR'
        },
        {
            sequence : 6,
            name: {
                firstName : 'Snehal',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-69.92 INR'
        },
        {
            sequence : 7,
            name: {
                firstName : 'Manasi',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-5.00 INR'
        },
        {
            sequence : 8,
            name: {
                firstName : 'Radhika',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '59.58 INR'
        },
        {
            sequence : 9,
            name: {
                firstName : 'Shruti',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-107.50 INR'
        },
        {
            sequence : 10,
            name: {
                firstName : 'Param',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-113.34 INR'
        },
        {
            sequence : 11,
            name: {
                firstName : 'Pratik',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '70.92 INR'
        },
        {
            sequence : 12,
            name: {
                firstName : 'Tushar',
                lastName : 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-105.75 INR'
        },
        {
            sequence : 13,
            name: {
                firstName : 'Neha',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-93.75 INR'
        },
        {
            sequence : 14,
            name: {
                firstName : 'Siddhu',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-27.50 INR'
        },
        {
            sequence : 15,
            name: {
                firstName : 'Poonam',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-25.84 INR'
        }
    ]

    getContestantData () {
        return this.contestants;
    }

}