import { Injectable } from "@angular/core";

export interface Contestent {
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
export class ContestentData {
    constructor(){

    }
    public contestents : Contestent [] = [
        {
            sequence : 1,
            name: {
                firstName : 'Suraj',
                lastName : 'Singh'
            },
            role: 'Admin',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-15.00 INR'
        },
        {
            sequence : 2,
            name: {
                firstName : 'Kailash',
                lastName : 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '37.50 USD'
        },
        {
            sequence : 3,
            name: {
                firstName : 'Kalpesh',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '66.67 INR'
        },
        {
            sequence : 4,
            name: {
                firstName : 'Neeraj',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-15.00 INR'
        },
        {
            sequence : 5,
            name: {
                firstName : 'Pooja',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '43.33 INR'
        },
        {
            sequence : 6,
            name: {
                firstName : 'Snehal',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '14.17 INR'
        },
        {
            sequence : 7,
            name: {
                firstName : 'Manasi',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-15.00 INR'
        },
        {
            sequence : 8,
            name: {
                firstName : 'Radhika',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '14.17 INR'
        },
        {
            sequence : 9,
            name: {
                firstName : 'Shruti',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-15.00 INR'
        },
        {
            sequence : 10,
            name: {
                firstName : 'Param',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-15.00 INR'
        },
        {
            sequence : 11,
            name: {
                firstName : 'Pratik',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '14.17 INR'
        },
        {
            sequence : 12,
            name: {
                firstName : 'Tushar',
                lastName : 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-32.50 USD'
        },
        {
            sequence : 13,
            name: {
                firstName : 'Neha',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-32.50 INR'
        },
        {
            sequence : 14,
            name: {
                firstName : 'Siddhhu',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: '-50.00 INR'
        },
        {
            sequence : 15,
            name: {
                firstName : 'Poonam',
                lastName : 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: 'NA INR'
        }
    ]

    getContestentData () {
        return this.contestents;
    }

}