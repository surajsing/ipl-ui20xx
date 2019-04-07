import { OnInit, Injectable } from "@angular/core";

export interface MatchFixtures {
    sequence: string,
    fixtures: string,
    location: string,
    teamOne: string,
    teamTwo: string,
    date: Date,
    winner: string
}
@Injectable({
    providedIn : 'root'
})
export class MatchFixturesData {
    constructor() {
    }

    public matches: MatchFixtures[] = [
        {
            sequence: 'Match 1',
            fixtures: 'CSK vs RCB',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'RCB',
            date: new Date(2019, 2, 23),
            winner: 'CSK'
        },
        {
            sequence: 'Match 2',
            fixtures: 'KKR vs SRH',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'SRH',
            date: new Date(2019, 2, 24),
            winner: 'KKR'
        },
        {
            sequence: 'Match 3',
            fixtures: 'MI vs DC',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'DC',
            date: new Date(2019, 2, 24),
            winner: 'DC'
        },
        {
            sequence: 'Match 4',
            fixtures: 'RR vs KXIP',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'KXIP',
            date: new Date(2019, 2, 25),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 5',
            fixtures: 'DC vs CSK',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'CSK',
            date: new Date(2019, 2, 26),
            winner: 'CSK'
        },
        {
            sequence: 'Match 6',
            fixtures: 'KKR vs KXIP',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'KXIP',
            date: new Date(2019, 2, 27),
            winner: 'KKR'
        },
        {
            sequence: 'Match 7',
            fixtures: 'RCB vs MI',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'MI',
            date: new Date(2019, 2, 28),
            winner: 'MI'
        },
        {
            sequence: 'Match 8',
            fixtures: 'SRH vs RR',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'RR',
            date: new Date(2019, 2, 29),
            winner: 'SRH'
        },
        {
            sequence: 'Match 9',
            fixtures: 'KXIP vs MI',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'MI',
            date: new Date(2019, 2, 30),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 10',
            fixtures: 'DC vs KKR',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'KKR',
            date: new Date(2019, 2, 30),
            winner: 'Tied (DC won Super Over)'
        },
        {
            sequence: 'Match 11',
            fixtures: 'SRH vs RCB',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'RCB',
            date: new Date(2019, 2, 31),
            winner: 'SRH'
        },
        {
            sequence: 'Match 12',
            fixtures: 'CSK vs RR',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'RR',
            date: new Date(2019, 2, 31),
            winner: 'CSK'
        },
        {
            sequence: 'Match 13',
            fixtures: 'KXIP vs DC',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'DC',
            date: new Date(2019, 3, 1),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 14',
            fixtures: 'RR vs RCB',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 2),
            winner: 'RR'
        },
        {
            sequence: 'Match 15',
            fixtures: 'MI vs CSK',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 3),
            winner: 'MI'
        },
        {
            sequence: 'Match 16',
            fixtures: 'DC vs SRH',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 4),
            winner: 'SRH'
        },
        {
            sequence: 'Match 17',
            fixtures: 'RCB vs KKR',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 5),
            winner: 'KKR'
        },
        {
            sequence: 'Match 18',
            fixtures: 'CSK vs KXIP',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 6),
            winner: 'CSK'
        },
        {
            sequence: 'Match 19',
            fixtures: 'SRH vs MI',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'MI',
            date: new Date(2019, 3, 6),
            winner: 'MI'
        },
        {
            sequence: 'Match 20',
            fixtures: 'RCB vs DC',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'DC',
            date: new Date(2019, 3, 7),
            winner: 'DC'
        },
        {
            sequence: 'Match 21',
            fixtures: 'RR vs KKR',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 7),
            winner: 'KKR'
        },
        {
            sequence: 'Match 22',
            fixtures: 'KXIP vs SRH',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 8),
            winner: 'NYD'
        },
        {
            sequence: 'Match 23',
            fixtures: 'CSK vs KKR',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 9),
            winner: 'NYD'
        },
        {
            sequence: 'Match 24',
            fixtures: 'MI vs KXIP',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 10),
            winner: 'NYD'
        },
        {
            sequence: 'Match 25',
            fixtures: 'RR vs CSK',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 11),
            winner: 'NYD'
        },
        {
            sequence: 'Match 26',
            fixtures: 'KKR vs DC',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'DC',
            date: new Date(2019, 3, 12),
            winner: 'NYD'
        },
        {
            sequence: 'Match 27',
            fixtures: 'MI vs RR',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'RR',
            date: new Date(2019, 3, 13),
            winner: 'NYD'
        },
        {
            sequence: 'Match 28',
            fixtures: 'KXIP vs RCB',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 13),
            winner: 'NYD'
        },
        {
            sequence: 'Match 29',
            fixtures: 'KKR vs CSK',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 14),
            winner: 'NYD'
        },
        {
            sequence: 'Match 30',
            fixtures: 'SRH vs DC',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'DC',
            date: new Date(2019, 3, 14),
            winner: 'NYD'
        },
        {
            sequence: 'Match 31',
            fixtures: 'MI vs RCB',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 15),
            winner: 'NYD'
        },
        {
            sequence: 'Match 32',
            fixtures: 'KXIP vs RR',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'RR',
            date: new Date(2019, 3, 16),
            winner: 'NYD'
        },
        {
            sequence: 'Match 33',
            fixtures: 'SRH vs CSK',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 17),
            winner: 'NYD'
        },
        {
            sequence: 'Match 34',
            fixtures: 'DC vs MI',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'MI',
            date: new Date(2019, 3, 18),
            winner: 'NYD'
        },
        {
            sequence: 'Match 35',
            fixtures: 'KKR vs RCB',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 19),
            winner: 'NYD'
        },
        {
            sequence: 'Match 36',
            fixtures: 'RR vs MI',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'MI',
            date: new Date(2019, 3, 20),
            winner: 'NYD'
        },
        {
            sequence: 'Match 37',
            fixtures: 'DC vs KXIP',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 20),
            winner: 'NYD'
        },
        {
            sequence: 'Match 38',
            fixtures: 'SRH vs KKR',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 21),
            winner: 'NYD'
        },
        {
            sequence: 'Match 39',
            fixtures: 'RCB vs CSK',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 21),
            winner: 'NYD'
        },
        {
            sequence: 'Match 40',
            fixtures: 'RR vs DC',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'DC',
            date: new Date(2019, 3, 22),
            winner: 'NYD'
        },
        {
            sequence: 'Match 41',
            fixtures: 'CSK vs SRH',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 23),
            winner: 'NYD'
        },
        {
            sequence: 'Match 42',
            fixtures: 'RCB vs KXIP',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 24),
            winner: 'NYD'
        },
        {
            sequence: 'Match 43',
            fixtures: 'KKR vs RR',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'RR',
            date: new Date(2019, 3, 25),
            winner: 'NYD'
        },
        {
            sequence: 'Match 44',
            fixtures: 'CSK vs MI',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'MI',
            date: new Date(2019, 3, 26),
            winner: 'NYD'
        },
        {
            sequence: 'Match 45',
            fixtures: 'RR vs SRH',
            location: 'Jaipur',
            teamOne: 'RR',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 27),
            winner: 'NYD'
        },
        {
            sequence: 'Match 46',
            fixtures: 'DC vs RCB',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 28),
            winner: 'NYD'
        },
        {
            sequence: 'Match 47',
            fixtures: 'KKR vs MI',
            location: 'Kolkata',
            teamOne: 'KKR',
            teamTwo: 'MI',
            date: new Date(2019, 3, 28),
            winner: 'NYD'
        },
        {
            sequence: 'Match 48',
            fixtures: 'SRH vs KXIP',
            location: 'Hyderabad',
            teamOne: 'SRH',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 29),
            winner: 'NYD'
        },
        {
            sequence: 'Match 49',
            fixtures: 'RCB vs RR',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'RR',
            date: new Date(2019, 3, 30),
            winner: 'NYD'
        },
        {
            sequence: 'Match 50',
            fixtures: 'CSK vs DC',
            location: 'Chennai',
            teamOne: 'CSK',
            teamTwo: 'DC',
            date: new Date(2019, 4, 1),
            winner: 'NYD'
        },
        {
            sequence: 'Match 51',
            fixtures: 'MI vs SRH',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'SRH',
            date: new Date(2019, 4, 2),
            winner: 'NYD'
        },
        {
            sequence: 'Match 52',
            fixtures: 'KXIP vs KKR',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'KKR',
            date: new Date(2019, 4, 3),
            winner: 'NYD'
        },
        {
            sequence: 'Match 53',
            fixtures: 'DC vs RR',
            location: 'Delhi',
            teamOne: 'DC',
            teamTwo: 'RR',
            date: new Date(2019, 4, 4),
            winner: 'NYD'
        },
        {
            sequence: 'Match 54',
            fixtures: 'RCB vs SRH',
            location: 'Bengaluru',
            teamOne: 'RCB',
            teamTwo: 'SRH',
            date: new Date(2019, 4, 4),
            winner: 'NYD'
        },
        {
            sequence: 'Match 55',
            fixtures: 'KXIP vs CSK',
            location: 'Mohali',
            teamOne: 'KXIP',
            teamTwo: 'CSK',
            date: new Date(2019, 4, 5),
            winner: 'NYD'
        },
        {
            sequence: 'Match 56',
            fixtures: 'MI vs KKR',
            location: 'Mumbai',
            teamOne: 'MI',
            teamTwo: 'KKR',
            date: new Date(2019, 4, 5),
            winner: 'NYD'
        }
    ];

    getMatchData(){
        return this.matches;
    }
}