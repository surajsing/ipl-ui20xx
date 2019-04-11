import { OnInit, Injectable } from "@angular/core";

export interface MatchFixtures {
    sequence: string,
    fixtures: string,
    location: string,
    bet: string,
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
            bet: 'Bet - Match Winner',
            teamOne: 'CSK',
            teamTwo: 'RCB',
            date: new Date(2019, 2, 23),
            winner: 'CSK'
        },
        {
            sequence: 'Match 2',
            fixtures: 'KKR vs SRH',
            location: 'Kolkata',
            bet: 'Bet - Total Boundaries',
            teamOne: 'KKR',
            teamTwo: 'SRH',
            date: new Date(2019, 2, 24),
            winner: 'KKR'
        },
        {
            sequence: 'Match 3',
            fixtures: 'MI vs DC',
            location: 'Mumbai',
            bet: 'Bet - Total Wickets',
            teamOne: 'MI',
            teamTwo: 'DC',
            date: new Date(2019, 2, 24),
            winner: 'DC'
        },
        {
            sequence: 'Match 4',
            fixtures: 'RR vs KXIP',
            location: 'Jaipur',
            bet: 'Bet - Match Winner',
            teamOne: 'RR',
            teamTwo: 'KXIP',
            date: new Date(2019, 2, 25),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 5',
            fixtures: 'DC vs CSK',
            location: 'Delhi',
            bet: 'Bet - Match Winner',
            teamOne: 'DC',
            teamTwo: 'CSK',
            date: new Date(2019, 2, 26),
            winner: 'CSK'
        },
        {
            sequence: 'Match 6',
            fixtures: 'KKR vs KXIP',
            location: 'Kolkata',
            bet: "Bet - Total 4's & Total 6's",
            teamOne: 'KKR',
            teamTwo: 'KXIP',
            date: new Date(2019, 2, 27),
            winner: 'KKR'
        },
        {
            sequence: 'Match 7',
            fixtures: 'RCB vs MI',
            location: 'Bengaluru',
            bet: 'Bet - Match Winner',
            teamOne: 'RCB',
            teamTwo: 'MI',
            date: new Date(2019, 2, 28),
            winner: 'MI'
        },
        {
            sequence: 'Match 8',
            fixtures: 'SRH vs RR',
            location: 'Hyderabad',
            bet: 'Bet - Total Catches & Top Run Scorer',
            teamOne: 'SRH',
            teamTwo: 'RR',
            date: new Date(2019, 2, 29),
            winner: 'SRH'
        },
        {
            sequence: 'Match 9',
            fixtures: 'KXIP vs MI',
            location: 'Mohali',
            bet: 'Bet - Total Powerplay Score & Total Wickets',
            teamOne: 'KXIP',
            teamTwo: 'MI',
            date: new Date(2019, 2, 30),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 10',
            fixtures: 'DC vs KKR',
            location: 'Delhi',
            bet: "Bet - Total 4's & Total 6's",
            teamOne: 'DC',
            teamTwo: 'KKR',
            date: new Date(2019, 2, 30),
            winner: 'Tied (DC won Super Over)'
        },
        {
            sequence: 'Match 11',
            fixtures: 'SRH vs RCB',
            location: 'Hyderabad',
            bet: 'Bet - Top Wicket Taker',
            teamOne: 'SRH',
            teamTwo: 'RCB',
            date: new Date(2019, 2, 31),
            winner: 'SRH'
        },
        {
            sequence: 'Match 12',
            fixtures: 'CSK vs RR',
            location: 'Chennai',
            bet: 'Bet - Top Run Scorer',
            teamOne: 'CSK',
            teamTwo: 'RR',
            date: new Date(2019, 2, 31),
            winner: 'CSK'
        },
        {
            sequence: 'Match 13',
            fixtures: 'KXIP vs DC',
            location: 'Mohali',
            bet: 'Bet - Match Winner',
            teamOne: 'KXIP',
            teamTwo: 'DC',
            date: new Date(2019, 3, 1),
            winner: 'KXIP'
        },
        {
            sequence: 'Match 14',
            fixtures: 'RR vs RCB',
            location: 'Jaipur',
            bet: 'Bet - Total Run in Match',
            teamOne: 'RR',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 2),
            winner: 'RR'
        },
        {
            sequence: 'Match 15',
            fixtures: 'MI vs CSK',
            location: 'Mumbai',
            bet: 'Bet - Top Scorer Batman & Bowler',
            teamOne: 'MI',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 3),
            winner: 'MI'
        },
        {
            sequence: 'Match 16',
            fixtures: 'DC vs SRH',
            location: 'Delhi',
            bet: 'Bet - Toss & Match Winner',
            teamOne: 'DC',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 4),
            winner: 'SRH'
        },
        {
            sequence: 'Match 17',
            fixtures: 'RCB vs KKR',
            location: 'Bengaluru',
            bet: "Bet - Match Winner & Total 6's",
            teamOne: 'RCB',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 5),
            winner: 'KKR'
        },
        {
            sequence: 'Match 18',
            fixtures: 'CSK vs KXIP',
            location: 'Chennai',
            bet: 'Bet - Top Run Scorer',
            teamOne: 'CSK',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 6),
            winner: 'CSK'
        },
        {
            sequence: 'Match 19',
            fixtures: 'SRH vs MI',
            location: 'Hyderabad',
            bet: 'Bet - Total Powerplay Score',
            teamOne: 'SRH',
            teamTwo: 'MI',
            date: new Date(2019, 3, 6),
            winner: 'MI'
        },
        {
            sequence: 'Match 20',
            fixtures: 'RCB vs DC',
            location: 'Bengaluru',
            bet: "Bet - Total 4's & Total 6's",
            teamOne: 'RCB',
            teamTwo: 'DC',
            date: new Date(2019, 3, 7),
            winner: 'DC'
        },
        {
            sequence: 'Match 21',
            fixtures: 'RR vs KKR',
            location: 'Jaipur',
            bet: 'Bet - Total Wickets',
            teamOne: 'RR',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 7),
            winner: 'KKR'
        },
        {
            sequence: 'Match 22',
            fixtures: 'KXIP vs SRH',
            location: 'Mohali',
            bet: 'Bet - Lowest Run Scorer',
            teamOne: 'KXIP',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 8),
            winner: 'KKR'
        },
        {
            sequence: 'Match 23',
            fixtures: 'CSK vs KKR',
            location: 'Chennai',
            bet: 'Bet - NA',
            teamOne: 'CSK',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 9),
            winner: 'CSK'
        },
        {
            sequence: 'Match 24',
            fixtures: 'MI vs KXIP',
            location: 'Mumbai',
            bet: 'Bet - Total Run in Match & Total Wickets',
            teamOne: 'MI',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 10),
            winner: 'MI'
        },
        {
            sequence: 'Match 25',
            fixtures: 'RR vs CSK',
            location: 'Jaipur',
            bet: 'Bet - Top 2 Run Scorer (One from each team)',
            teamOne: 'RR',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 11),
            winner: 'NYD'
        },
        {
            sequence: 'Match 26',
            fixtures: 'KKR vs DC',
            location: 'Kolkata',
            bet: 'Bet - Top Run Scorer & Match Winner',
            teamOne: 'KKR',
            teamTwo: 'DC',
            date: new Date(2019, 3, 12),
            winner: 'NYD'
        },
        {
            sequence: 'Match 27',
            fixtures: 'MI vs RR',
            location: 'Mumbai',
            bet: 'Bet - Total Catches & Total Powerplay Score',
            teamOne: 'MI',
            teamTwo: 'RR',
            date: new Date(2019, 3, 13),
            winner: 'NYD'
        },
        {
            sequence: 'Match 28',
            fixtures: 'KXIP vs RCB',
            location: 'Mohali',
            bet: "Bet - Total 6's & Top Wicket Taker",
            teamOne: 'KXIP',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 13),
            winner: 'NYD'
        },
        {
            sequence: 'Match 29',
            fixtures: 'KKR vs CSK',
            location: 'Kolkata',
            bet: 'Bet - Individual Powerplay Scores',
            teamOne: 'KKR',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 14),
            winner: 'NYD'
        },
        {
            sequence: 'Match 30',
            fixtures: 'SRH vs DC',
            location: 'Hyderabad',
            bet: "Bet - Total Boundaries & Total Wickets",
            teamOne: 'SRH',
            teamTwo: 'DC',
            date: new Date(2019, 3, 14),
            winner: 'NYD'
        },
        {
            sequence: 'Match 31',
            fixtures: 'MI vs RCB',
            location: 'Mumbai',
            bet: 'Bet - NYD',
            teamOne: 'MI',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 15),
            winner: 'NYD'
        },
        {
            sequence: 'Match 32',
            fixtures: 'KXIP vs RR',
            location: 'Mohali',
            bet: 'Bet - NYD',
            teamOne: 'KXIP',
            teamTwo: 'RR',
            date: new Date(2019, 3, 16),
            winner: 'NYD'
        },
        {
            sequence: 'Match 33',
            fixtures: 'SRH vs CSK',
            location: 'Hyderabad',
            bet: 'Bet - NYD',
            teamOne: 'SRH',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 17),
            winner: 'NYD'
        },
        {
            sequence: 'Match 34',
            fixtures: 'DC vs MI',
            location: 'Delhi',
            bet: 'Bet - NYD',
            teamOne: 'DC',
            teamTwo: 'MI',
            date: new Date(2019, 3, 18),
            winner: 'NYD'
        },
        {
            sequence: 'Match 35',
            fixtures: 'KKR vs RCB',
            location: 'Kolkata',
            bet: 'Bet - NYD',
            teamOne: 'KKR',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 19),
            winner: 'NYD'
        },
        {
            sequence: 'Match 36',
            fixtures: 'RR vs MI',
            location: 'Jaipur',
            bet: 'Bet - NYD',
            teamOne: 'RR',
            teamTwo: 'MI',
            date: new Date(2019, 3, 20),
            winner: 'NYD'
        },
        {
            sequence: 'Match 37',
            fixtures: 'DC vs KXIP',
            location: 'Delhi',
            bet: 'Bet - NYD',
            teamOne: 'DC',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 20),
            winner: 'NYD'
        },
        {
            sequence: 'Match 38',
            fixtures: 'SRH vs KKR',
            location: 'Hyderabad',
            bet: 'Bet - NYD',
            teamOne: 'SRH',
            teamTwo: 'KKR',
            date: new Date(2019, 3, 21),
            winner: 'NYD'
        },
        {
            sequence: 'Match 39',
            fixtures: 'RCB vs CSK',
            location: 'Bengaluru',
            bet: 'Bet - NYD',
            teamOne: 'RCB',
            teamTwo: 'CSK',
            date: new Date(2019, 3, 21),
            winner: 'NYD'
        },
        {
            sequence: 'Match 40',
            fixtures: 'RR vs DC',
            location: 'Jaipur',
            bet: 'Bet - NYD',
            teamOne: 'RR',
            teamTwo: 'DC',
            date: new Date(2019, 3, 22),
            winner: 'NYD'
        },
        {
            sequence: 'Match 41',
            fixtures: 'CSK vs SRH',
            location: 'Chennai',
            bet: 'Bet - NYD',
            teamOne: 'CSK',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 23),
            winner: 'NYD'
        },
        {
            sequence: 'Match 42',
            fixtures: 'RCB vs KXIP',
            location: 'Bengaluru',
            bet: 'Bet - NYD',
            teamOne: 'RCB',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 24),
            winner: 'NYD'
        },
        {
            sequence: 'Match 43',
            fixtures: 'KKR vs RR',
            location: 'Kolkata',
            bet: 'Bet - NYD',
            teamOne: 'KKR',
            teamTwo: 'RR',
            date: new Date(2019, 3, 25),
            winner: 'NYD'
        },
        {
            sequence: 'Match 44',
            fixtures: 'CSK vs MI',
            location: 'Chennai',
            bet: 'Bet - NYD',
            teamOne: 'CSK',
            teamTwo: 'MI',
            date: new Date(2019, 3, 26),
            winner: 'NYD'
        },
        {
            sequence: 'Match 45',
            fixtures: 'RR vs SRH',
            location: 'Jaipur',
            bet: 'Bet - NYD',
            teamOne: 'RR',
            teamTwo: 'SRH',
            date: new Date(2019, 3, 27),
            winner: 'NYD'
        },
        {
            sequence: 'Match 46',
            fixtures: 'DC vs RCB',
            location: 'Delhi',
            bet: 'Bet - NYD',
            teamOne: 'DC',
            teamTwo: 'RCB',
            date: new Date(2019, 3, 28),
            winner: 'NYD'
        },
        {
            sequence: 'Match 47',
            fixtures: 'KKR vs MI',
            location: 'Kolkata',
            bet: 'Bet - NYD',
            teamOne: 'KKR',
            teamTwo: 'MI',
            date: new Date(2019, 3, 28),
            winner: 'NYD'
        },
        {
            sequence: 'Match 48',
            fixtures: 'SRH vs KXIP',
            location: 'Hyderabad',
            bet: 'Bet - NYD',
            teamOne: 'SRH',
            teamTwo: 'KXIP',
            date: new Date(2019, 3, 29),
            winner: 'NYD'
        },
        {
            sequence: 'Match 49',
            fixtures: 'RCB vs RR',
            location: 'Bengaluru',
            bet: 'Bet - NYD',
            teamOne: 'RCB',
            teamTwo: 'RR',
            date: new Date(2019, 3, 30),
            winner: 'NYD'
        },
        {
            sequence: 'Match 50',
            fixtures: 'CSK vs DC',
            location: 'Chennai',
            bet: 'Bet - NYD',
            teamOne: 'CSK',
            teamTwo: 'DC',
            date: new Date(2019, 4, 1),
            winner: 'NYD'
        },
        {
            sequence: 'Match 51',
            fixtures: 'MI vs SRH',
            location: 'Mumbai',
            bet: 'Bet - NYD',
            teamOne: 'MI',
            teamTwo: 'SRH',
            date: new Date(2019, 4, 2),
            winner: 'NYD'
        },
        {
            sequence: 'Match 52',
            fixtures: 'KXIP vs KKR',
            location: 'Mohali',
            bet: 'Bet - NYD',
            teamOne: 'KXIP',
            teamTwo: 'KKR',
            date: new Date(2019, 4, 3),
            winner: 'NYD'
        },
        {
            sequence: 'Match 53',
            fixtures: 'DC vs RR',
            location: 'Delhi',
            bet: 'Bet - NYD',
            teamOne: 'DC',
            teamTwo: 'RR',
            date: new Date(2019, 4, 4),
            winner: 'NYD'
        },
        {
            sequence: 'Match 54',
            fixtures: 'RCB vs SRH',
            location: 'Bengaluru',
            bet: 'Bet - NYD',
            teamOne: 'RCB',
            teamTwo: 'SRH',
            date: new Date(2019, 4, 4),
            winner: 'NYD'
        },
        {
            sequence: 'Match 55',
            fixtures: 'KXIP vs CSK',
            location: 'Mohali',
            bet: 'Bet - NYD',
            teamOne: 'KXIP',
            teamTwo: 'CSK',
            date: new Date(2019, 4, 5),
            winner: 'NYD'
        },
        {
            sequence: 'Match 56',
            fixtures: 'MI vs KKR',
            location: 'Mumbai',
            bet: 'Bet - NYD',
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