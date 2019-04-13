import { Injectable } from "@angular/core";

export interface Contestant {
    sequence: number,
    name: {
        firstName: string,
        lastName: string
    },
    role: string,
    currentHoldingLabel: string,
    currentHoldingValue: string
}

@Injectable({
    providedIn: 'root'
})
export class ContestantData {
    constructor() {

    }
    public contestants: Contestant[] = [
        {
            sequence: 1,
            name: {
                firstName: 'Suraj',
                lastName: 'Singh'
            },
            role: 'Admin',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 2,
            name: {
                firstName: 'Kailash',
                lastName: 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 3,
            name: {
                firstName: 'Kalpesh',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 4,
            name: {
                firstName: 'Neeraj',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 5,
            name: {
                firstName: 'Pooja',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 6,
            name: {
                firstName: 'Snehal',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 7,
            name: {
                firstName: 'Manasi',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 8,
            name: {
                firstName: 'Radhika',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 9,
            name: {
                firstName: 'Shruti',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 10,
            name: {
                firstName: 'Param',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 11,
            name: {
                firstName: 'Pratik',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 12,
            name: {
                firstName: 'Tushar',
                lastName: 'Singh'
            },
            role: 'Onshore Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 13,
            name: {
                firstName: 'Neha',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 14,
            name: {
                firstName: 'Siddhu',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        },
        {
            sequence: 15,
            name: {
                firstName: 'Poonam',
                lastName: 'Singh'
            },
            role: 'Sattebaaz',
            currentHoldingLabel: 'Current Holding Value',
            currentHoldingValue: ''
        }
    ]

    getContestantData() {
        return this.contestants;
    }

}