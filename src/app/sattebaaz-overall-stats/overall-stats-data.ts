import { Injectable } from '@angular/core';

export interface ContestantStat {
    name: string,
    bet: string,
    holdingValue: string
}
export interface OverallStats {
    matchFixtures: {
        sequence: string,
        match: string,
        result: string
    },
    contestantStats: ContestantStat[]
}

@Injectable({
    providedIn: 'root'
})
export class OverallStatsData {

    overallIPLStats: OverallStats[] = [
        {
            matchFixtures: {
                sequence: 'Match 1',
                match: 'CSK vs RCB',
                result: 'CSK Winner'
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Neeraj',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Pooja',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Manasi',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Radhika',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Param',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Pratik',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Tushar',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Siddhu',
                    bet: 'RCB Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: 'NA',
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 2',
                match: 'KKR vs SRH',
                result: '47 Boundaries'
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: '50 Boundaries',
                    holdingValue: '60.00'
                },
                {
                    name: 'Kailash',
                    bet: '44 Boundaries',
                    holdingValue: '60.00'
                },
                {
                    name: 'Suraj',
                    bet: '21 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: '38 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: '12 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: '39 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: '18 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: '30 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: '38 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: '28 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: '32 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: '28 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: '35 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: '55 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: 'NA',
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 3',
                match: 'MI vs DC',
                result: '15 Wickets'
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: '15 Wickets',
                    holdingValue: '36.67'
                },
                {
                    name: 'Kailash',
                    bet: '11 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: '8 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: '14 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: '15 Wickets',
                    holdingValue: '36.67'
                },
                {
                    name: 'Snehal',
                    bet: '13 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: '12 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: '15 Wickets',
                    holdingValue: '36.67'
                },
                {
                    name: 'Shruti',
                    bet: '13 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: '14 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: '10 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: '11 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: '13 Wickets',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: '11 Boundaries',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: 'NA',
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 4',
                match: 'RR vs KXIP',
                result: 'KXIP Winner'
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: 'KXIP Winner',
                    holdingValue: '36.67'
                },
                {
                    name: 'Snehal',
                    bet: 'KXIP Winner',
                    holdingValue: '36.67'
                },
                {
                    name: 'Manasi',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: 'KXIP Winner',
                    holdingValue: '36.67'
                },
                {
                    name: 'Tushar',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: 'RR Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: 'NA',
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 5',
                match: 'DC vs CSK',
                result: 'CSK Winner'
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Suraj',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Neeraj',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Pooja',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Radhika',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Shruti',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Param',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Pratik',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: 'CSK Winner',
                    holdingValue: '7.50'
                },
                {
                    name: 'Neha',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: 'DC Winner',
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: 'NA',
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 6',
                match: 'KKR vs KXIP',
                result: "33-4's & 24-6's"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "50-4's & 25-6's",
                    holdingValue: '65.00'
                },
                {
                    name: 'Kailash',
                    bet: "32-4's & 12-6's",
                    holdingValue: '8.75'
                },
                {
                    name: 'Suraj',
                    bet: "32-4's & 12-6's",
                    holdingValue: '8.75'
                },
                {
                    name: 'Neeraj',
                    bet: "43-4's & 14-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "31-4's & 16-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "28-4's & 15-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "32-4's & 18-6's",
                    holdingValue: '8.75'
                },
                {
                    name: 'Radhika',
                    bet: "30-4's & 22-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "34-4's & 14-6's",
                    holdingValue: '8.75'
                },
                {
                    name: 'Param',
                    bet: "25-4's & 16-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "45-4's & 18-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "47-4's & 14-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "27-4's & 17-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "35-4's & 15-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "19-4's & 9-6's",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 7',
                match: 'RCB vs MI',
                result: "MI Winner"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Manasi',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Radhika',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Param',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Pratik',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Tushar',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Neha',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                },
                {
                    name: 'Siddhu',
                    bet: "RCB Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "MI Winner",
                    holdingValue: '8.75'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 8',
                match: 'SRH vs RR',
                result: "5 Catches & Sanju TOP SCORER"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "8 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "8 & Williamson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "7 & Sanju",
                    holdingValue: '60.00'
                },
                {
                    name: 'Neeraj',
                    bet: "8 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "6 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "7 & Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "8 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "7 & Williamson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "7 & Williamson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "8 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "7 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "8 & Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "7 & Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "5 & Warner",
                    holdingValue: '60.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 9',
                match: 'KXIP vs MI',
                result: "Powerplay score 100 & 9 Wickets"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "100 & 10",
                    holdingValue: '60.00'
                },
                {
                    name: 'Kailash',
                    bet: "105 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "105 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "105 & 8",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "120 & 15",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "117 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "98 & 9",
                    holdingValue: '60.00'
                },
                {
                    name: 'Radhika',
                    bet: "105 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "84 & 8",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "120 & 12",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "110 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "90 & 12",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "115 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "86 & 11",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 10',
                match: 'DC vs KKR',
                result: "38-4's & 15-6's"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "40-4's & 20-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "35-4's & 15-6's",
                    holdingValue: '55.00'
                },
                {
                    name: 'Suraj',
                    bet: "37-4's & 16-6's",
                    holdingValue: '55.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "29-4's & 20-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "28-4's & 22-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "23-4's & 13-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "28-4's & 22-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "32-4's & 16-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "30-4's & 21-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "35-4's & 20-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "30-4's & 14-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "40-4's & 17-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "34-4's & 25-6's",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 11',
                match: 'SRH vs RCB',
                result: "Chahal TOP Wicket TAKER"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "S Kaul",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "Chahal",
                    holdingValue: '18.00'
                },
                {
                    name: 'Pooja',
                    bet: "Chahal",
                    holdingValue: '18.00'
                },
                {
                    name: 'Snehal',
                    bet: "Chahal",
                    holdingValue: '18.00'
                },
                {
                    name: 'Manasi',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "Barman",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "Bhuvaneswar",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Chahal",
                    holdingValue: '18.00'
                },
                {
                    name: 'Tushar',
                    bet: "Chahal",
                    holdingValue: '18.00'
                },
                {
                    name: 'Neha',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "Rashid",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 12',
                match: 'CSK vs RR',
                result: "Raina TOP SCORER"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Raina",
                    holdingValue: '40.00'
                },
                {
                    name: 'Kailash',
                    bet: "Raina",
                    holdingValue: '40.00'
                },
                {
                    name: 'Suraj',
                    bet: "Raina",
                    holdingValue: '40.00'
                },
                {
                    name: 'Neeraj',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "K Jadhav",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "Rahane",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "Buttler",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 13',
                match: 'KXIP vs DC',
                result: "KXIP Winner"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "KXIP Winner",
                    holdingValue: '25.00'
                },
                {
                    name: 'Neeraj',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "KXIP Winner",
                    holdingValue: '25.00'
                },
                {
                    name: 'Radhika',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "KXIP Winner",
                    holdingValue: '25.00'
                },
                {
                    name: 'Tushar',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "DC Winner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "KXIP Winner",
                    holdingValue: '25.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 14',
                match: 'RR vs RCB',
                result: "Total Run 322"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "350",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "381",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "347",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "350",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "337",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "354",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "337",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "330",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "321",
                    holdingValue: '100.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "375",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "340",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 15',
                match: 'MI vs CSK',
                result: "Top Scorer Suryakumar & Tahir"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Raina & Chahar",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Rohit & Bravo",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "Suryakumar & Bumrah",
                    holdingValue: '60.00'
                },
                {
                    name: 'Neeraj',
                    bet: "Raina & Bravo",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "De Cock & Chahar",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "De Cock & Bravo",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "Rohit & Tahir",
                    holdingValue: '7.50'
                },
                {
                    name: 'Radhika',
                    bet: "De Cock & Tahir",
                    holdingValue: '7.50'
                },
                {
                    name: 'Shruti',
                    bet: "Rohit & Bumrah",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "Raina & Bumrah",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Watson & Bumrah",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "Rohit & Bumrah",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Rohit & Tahir",
                    holdingValue: '7.50'
                },
                {
                    name: 'Poonam',
                    bet: "Rohit & Tahir",
                    holdingValue: '7.50'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 16',
                match: 'DC vs SRH',
                result: "Toss & Match Winner - SRH"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "SRH & SRH",
                    holdingValue: '12.91'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "DC & SRH",
                    holdingValue: '-0.84'
                },
                {
                    name: 'Neeraj',
                    bet: "DC & DC",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "DC & SRH",
                    holdingValue: '-0.84'
                },
                {
                    name: 'Manasi',
                    bet: "DC & DC",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "SRH & SRH",
                    holdingValue: '12.91'
                },
                {
                    name: 'Shruti',
                    bet: "DC & DC",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "SRH & SRH",
                    holdingValue: '12.91'
                },
                {
                    name: 'Pratik',
                    bet: "DC & DC",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "DC & DC",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "SRH & SRH",
                    holdingValue: '12.91'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 17',
                match: 'RCB vs KKR',
                result: "KKR Winner & 19-6's"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "KKR & 25",
                    holdingValue: '0.00'
                },
                {
                    name: 'Kailash',
                    bet: "RCB & 27",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "RCB & 23",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "KKR & 16",
                    holdingValue: '0.00'
                },
                {
                    name: 'Radhika',
                    bet: "KKR & 18",
                    holdingValue: '0.00'
                },
                {
                    name: 'Shruti',
                    bet: "KKR & 26",
                    holdingValue: '0.00'
                },
                {
                    name: 'Param',
                    bet: "KKR & 22",
                    holdingValue: '0.00'
                },
                {
                    name: 'Pratik',
                    bet: "RCB & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "RCB & 19",
                    holdingValue: '40.00'
                },
                {
                    name: 'Poonam',
                    bet: "RCB & 22",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 18',
                match: 'CSK vs KXIP',
                result: "Top Run Scorer DuPlesis"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Mayank",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "DuPlesis",
                    holdingValue: '80.00'
                },
                {
                    name: 'Shruti',
                    bet: "Gayle",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "Gayle",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "Dhoni",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 19',
                match: 'SRH vs MI',
                result: "Powerplay Score 69 - CANCELLED"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "100",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "107",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "95",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "107",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "115",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "111",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "110",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "96",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "95",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "117",
                    holdingValue: '0'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 20',
                match: 'RCB vs DC',
                result: "26-4's & 10-6's"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "45-4's & 10-6's",
                    holdingValue: '45.00'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "38-4's & 17-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "41-4's & 13-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "31-4's & 16-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "34-4's & 17-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "28-4's & 18-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "26-4's & 28-6's",
                    holdingValue: '45.00'
                },
                {
                    name: 'Shruti',
                    bet: "38-4's & 14-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "36-4's & 20-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "32-4's & 16-6's",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "33-4's & 19-6's",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 21',
                match: 'RR vs KKR',
                result: "Total 5 Wickets - CANCELLED"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "11",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "11",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "15",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "9",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "14",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "11",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "13",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "9",
                    holdingValue: '0'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 22',
                match: 'KXIP vs SRH',
                result: "Lowest Run Scorer - Mandeep S"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Gayle",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "Y Pathan",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "Mandeep S",
                    holdingValue: '80.00'
                },
                {
                    name: 'Snehal',
                    bet: "Y Pathan",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "Gayle",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "Y Pathan",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "V Shankar",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Sarfaraz K",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 23',
                match: 'CSK vs KKR',
                result: "NA"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 24',
                match: 'MI vs KXIP',
                result: "Total Run 395 & Total Wickets 11"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "353 & 9",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "387 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "337 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "354 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "330 & 12",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "370 & 11",
                    holdingValue: '35.00'
                },
                {
                    name: 'Tushar',
                    bet: "335 & 14",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "367 & 9",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "409 & 13",
                    holdingValue: '35.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 25',
                match: 'RR vs CSK',
                result: "Top Run Scorer - Sanju & Rayudu"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Rahane & Jadhav",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Sanju & Rayudu",
                    holdingValue: '80.00'
                },
                {
                    name: 'Suraj',
                    bet: "Buttler & Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "Buttler & DuPlesis",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "Smith & DuPlesis",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "Buttler & Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "Buttler & Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Smith & Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Buttler & Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 26',
                match: 'KKR vs DC',
                result: "Top Run Scorer - Dhawan & Match Winner - DC"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "N Rana & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Dhawan & KKR",
                    holdingValue: '50.00'
                },
                {
                    name: 'Suraj',
                    bet: "N Rana & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "Colin & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "Russell & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "S Iyer & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "P Shaw & DC",
                    holdingValue: '20.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "N Rana & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Russell & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "Russell & KKR",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "N Rana & DC",
                    holdingValue: '20.00'
                },
                {
                    name: 'Poonam',
                    bet: "Uthappa & KKR",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 27',
                match: 'MI vs RR',
                result: "Total Powerplay Score 116 & Catches 8"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "100 & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "104 & 7",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "105 & 6",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "144 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "117 & 13",
                    holdingValue: '40.00'
                },
                {
                    name: 'Manasi',
                    bet: "100 & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "110 & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "110 & 6",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "110 & 8",
                    holdingValue: '40.00'
                },
                {
                    name: 'Poonam',
                    bet: "111 & 6",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 28',
                match: 'KXIP vs RCB',
                result: "Total 6's-10 CNCL & Top Wicket Taker Chahal"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "15 & Ashwin",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Kailash',
                    bet: "15 & Curran",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Suraj',
                    bet: "14 & Shami",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "14 & Chahal",
                    holdingValue: '8.33'
                },
                {
                    name: 'Manasi',
                    bet: "22 & Chahal",
                    holdingValue: '8.33'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "22 & Curran",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "20 & Murugan",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Poonam',
                    bet: "19 & Chahal",
                    holdingValue: '8.33'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 29',
                match: 'KKR vs CSK',
                result: "Powerplay score KKR - 49 & CSK - 44"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "KKR -55 & CSK - 59",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "KKR - 56 & CSK - 62",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "KKR - 50 & CSK - 50",
                    holdingValue: '30.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "KKR - 60 & CSK - 56",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 30',
                match: 'SRH vs DC',
                result: "Total Boundaries 28 - CNCL & Total Wickets 17"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "43 & 14",
                    holdingValue: '10.00'
                },
                {
                    name: 'Suraj',
                    bet: "50 & 10",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "46 & 11",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 31',
                match: 'MI vs RCB',
                result: "Match Winner MI & Total Run 343"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "MI & 381",
                    holdingValue: '-1.00'
                },
                {
                    name: 'Suraj',
                    bet: "MI & 320",
                    holdingValue: '44.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "RCB & 384",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "MI & 377",
                    holdingValue: '-1.00'
                },
                {
                    name: 'Manasi',
                    bet: "RCB & 373",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "MI & 368",
                    holdingValue: '-1.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "MI & 390",
                    holdingValue: '-1.00'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "RCB & 392",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "RCB & 397",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 32',
                match: 'KXIP vs RR',
                result: "Match Winner KXIP & Post PP Wicket 11"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "RR & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "RR & 9",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "KXIP & 7",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "KXIP & 7",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Manasi',
                    bet: "KXIP & 11",
                    holdingValue: '48.33'
                },
                {
                    name: 'Radhika',
                    bet: "KXIP & 10",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Shruti',
                    bet: "KXIP & 7",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Param',
                    bet: "KXIP & 8",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Pratik',
                    bet: "RR & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "RR & 9",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 33',
                match: 'SRH vs CSK',
                result: "Top Run Scorer - Bairstow"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Rayudu",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Bairstow",
                    holdingValue: '30.00'
                },
                {
                    name: 'Suraj',
                    bet: "Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "Raina",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "Warner",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "DuPlesis",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "Bairstow",
                    holdingValue: '30.00'
                },
                {
                    name: 'Radhika',
                    bet: "Williamson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "Watson",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "Bairstow",
                    holdingValue: '30.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 34',
                match: 'DC vs MI',
                result: "Total 4's - 23 & Total 6's - 10"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "40 & 20",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "33 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "35 & 15",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "27 & 16",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "30 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "22 & 9",
                    holdingValue: '57.50'
                },
                {
                    name: 'Radhika',
                    bet: "24 & 18",
                    holdingValue: '12.50'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "37 & 16",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "40 & 22",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 35',
                match: 'KKR vs RCB',
                result: "Top Run Scorer - N Rana & Kohli"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "S Gill & Kohli",
                    holdingValue: '-4.00'
                },
                {
                    name: 'Kailash',
                    bet: "C Lynn & Kohli",
                    holdingValue: '-4.00'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "N Rana & Kohli",
                    holdingValue: '11.00'
                },
                {
                    name: 'Radhika',
                    bet: "Utthappa & Moen",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "C Lynn & Kohli",
                    holdingValue: '-4.00'
                },
                {
                    name: 'Poonam',
                    bet: "N Rana & Kohli",
                    holdingValue: '11.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 36',
                match: 'RR vs MI',
                result: "Match Winner - RR & Total 6's - 9"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "MI & 10",
                    holdingValue: '7.50'
                },
                {
                    name: 'Kailash',
                    bet: "RR & 14",
                    holdingValue: '1.67'
                },
                {
                    name: 'Suraj',
                    bet: "MI & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "MI & 10",
                    holdingValue: '7.50'
                },
                {
                    name: 'Radhika',
                    bet: "MI & 18",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "RR & 16",
                    holdingValue: '1.67'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "RR & 17",
                    holdingValue: '1.67'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 37',
                match: 'DC vs KXIP',
                result: "Top Wicket Taker- Lamichhane & Scorer>30 4"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "R Ashwin & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "R Ashwin & 4",
                    holdingValue: '-1.25'
                },
                {
                    name: 'Suraj',
                    bet: "Rabada & 4",
                    holdingValue: '-1.25'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "Rabada & 4",
                    holdingValue: '-1.25'
                },
                {
                    name: 'Manasi',
                    bet: "Amit & 5",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "Rabada & 4",
                    holdingValue: '-1.25'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Lamichhane & 5",
                    holdingValue: '25.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 38',
                match: 'SRH vs KKR',
                result: "Total Run 320 & Total Wicket 9"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "275 & 15",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "368 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "352 & 12",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "307 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "318 & 9",
                    holdingValue: '70.00'
                },
                {
                    name: 'Radhika',
                    bet: "290 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "363 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "330 & 10",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 39',
                match: 'RCB vs CSK',
                result: "Top Batman ABD & Bowler Jadeja"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Kohli & Tahir",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Kailash',
                    bet: "Raina & Tahir",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "DuPlesis & Chahal",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "ABD & Jadeja",
                    holdingValue: '50.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "Kohli & Tahir",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "ABD & Tahir",
                    holdingValue: '0.00'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "ABD & Tahir",
                    holdingValue: '0.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "Watson & Chahal",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "ABD & Tahir",
                    holdingValue: '0.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "ABD & Tahir",
                    holdingValue: '0.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 40',
                match: 'RR vs DC',
                result: "Match Winner DC & Total Catch 6"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "DC & 9",
                    holdingValue: '1.25'
                },
                {
                    name: 'Suraj',
                    bet: "DC & 7",
                    holdingValue: '1.25'
                },
                {
                    name: 'Neeraj',
                    bet: "RR & 7",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "RR & 7",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Manasi',
                    bet: "DC & 12",
                    holdingValue: '1.25'
                },
                {
                    name: 'Radhika',
                    bet: "DC & 6",
                    holdingValue: '23.75'
                },
                {
                    name: 'Shruti',
                    bet: "RR & 7",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "RR & 6",
                    holdingValue: '12.50'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "RR & 8",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 41',
                match: 'CSK vs SRH',
                result: "Total PP Score 103 & Wickets 7"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "88 & 14",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "97 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "98 & 9",
                    holdingValue: '10.00'
                },
                {
                    name: 'Manasi',
                    bet: "103 & 9",
                    holdingValue: '50.00'
                },
                {
                    name: 'Radhika',
                    bet: "90 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "78 & 10",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "85 & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "85 & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 42',
                match: 'RCB vs KXIP',
                result: "Post PP Runs 249 & Total Boundaries 55"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "200 & 50",
                    holdingValue: '6.67'
                },
                {
                    name: 'Kailash',
                    bet: "251 & 47",
                    holdingValue: '40.00'
                },
                {
                    name: 'Suraj',
                    bet: "223 & 48",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "263 & 83",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "268 & 46",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "260 & 38",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "280 & 50",
                    holdingValue: '6.67'
                },
                {
                    name: 'Param',
                    bet: "240 & 45",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "210 & 41",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "270 & 60",
                    holdingValue: '6.67'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 43',
                match: 'KKR vs RR',
                result: "Top Scorer Rana & Rahane"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "S Gill & Rahane",
                    holdingValue: '30.00'
                },
                {
                    name: 'Kailash',
                    bet: "Russell & Sanju",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "Lynn & Smith",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "Russell & Smith",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Radhika',
                    bet: "Russell & Smith",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "Lynn & Sanju",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Rana & Sanju",
                    holdingValue: '10.00'
                },
                {
                    name: 'Poonam',
                    bet: "Rana & Smith",
                    holdingValue: '10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 44',
                match: 'CSK vs MI',
                result: "Match Winner MI & Total Wickets 14"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "MI & 15",
                    holdingValue: '2.00'
                },
                {
                    name: 'Kailash',
                    bet: "CSK & 13",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "CSK & 9",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "CSK & 11",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "MI & 13",
                    holdingValue: '2.00'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "CSK & 14",
                    holdingValue: '50.00'
                },
                {
                    name: 'Radhika',
                    bet: "MI & 12",
                    holdingValue: '2.00'
                },
                {
                    name: 'Shruti',
                    bet: "MI & 12",
                    holdingValue: '2.00'
                },
                {
                    name: 'Param',
                    bet: "CSK & 15",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "CSK & 10",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Siddhu',
                    bet: "MI & 12",
                    holdingValue: '2.00'
                },
                {
                    name: 'Poonam',
                    bet: "CSK & 8",
                    holdingValue: '-10.00'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 45',
                match: 'RR vs SRH',
                result: "Top Wicket Taker - Unadkat & Total Run 321"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Unadkat & 350",
                    holdingValue: '15.00'
                },
                {
                    name: 'Kailash',
                    bet: "Bhuvaneshwar & 333",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "Bhuvaneshwar & 307",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "Unadkat & 355",
                    holdingValue: '15.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "Gopal & 318",
                    holdingValue: '40.00'
                },
                {
                    name: 'Radhika',
                    bet: "Rashid & 276",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "Rashid & 315",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "Bhuvaneshwar & 340",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "Rashid & 341",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Khaleel & 365",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 46',
                match: 'DC vs RCB',
                result: "Scorer>30 - 4 & Total 4's - 30"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "5 & 30",
                    holdingValue: '23.33'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "5 & 32",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "5 & 32",
                    holdingValue: '-1.67'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "7 & 37",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "6 & 38",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 47',
                match: 'KKR vs MI',
                result: "Batman Lynn & Bowler Bumrah"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "Lewis & Bumrah",
                    holdingValue: '-2.50'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "Rohit & Bumrah",
                    holdingValue: '-2.50'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Lynn & Malinga",
                    holdingValue: '5.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 48',
                match: 'SRH vs KXIP',
                result: "PP Score 121 & Total Boundaries 43"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "103 & 49",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "96 & 48",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "110 & 41",
                    holdingValue: '25.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "87 & 43",
                    holdingValue: '25.00'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "100 & 34",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "100 & 42",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "96 & 46",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 49',
                match: 'RCB vs RR',
                result: "No Results"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 50',
                match: 'CSK vs DC',
                result: "Bowler Tahir & J Suchith"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "Jadeja & NA",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Kailash',
                    bet: "Chahar & Mishra",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Suraj',
                    bet: "Jadeja & Mishra",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "Harbhajan & Mishra",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "Harbhajan & Mishra",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "Tahir & NA",
                    holdingValue: '30.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Jadeja & J Suchith",
                    holdingValue: '15.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 51',
                match: 'MI vs SRH',
                result: "Total Runs 324 & Total Boundaries 43"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "348 & 45",
                    holdingValue: '20.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "345 & 48",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "363 & 51",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Param',
                    bet: "374 & 48",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pratik',
                    bet: "341 & 51",
                    holdingValue: '20.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "372 & 52",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 52',
                match: 'KXIP vs KKR',
                result: "No one Participated"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 53',
                match: 'DC vs RR',
                result: "Post PP Wicktet 8 & Total 6's - 11"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "6 & 9",
                    holdingValue: '20.00'
                },
                {
                    name: 'Suraj',
                    bet: "8 & 15",
                    holdingValue: '20.00'
                },
                {
                    name: 'Neeraj',
                    bet: "9 & 18",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "7 & 16",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "7 & 19",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "6 & 14",
                    holdingValue: '-10.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 54',
                match: 'RCB vs SRH',
                result: "Scorers>30 - 3 & Catches 13-CANC"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "5 & 5",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Kailash',
                    bet: "6 & 5",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Suraj',
                    bet: "4 & 6",
                    holdingValue: '15.00'
                },
                {
                    name: 'Neeraj',
                    bet: "7 & 8",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "5 & 7",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "6 & 8",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Shruti',
                    bet: "4 & 6",
                    holdingValue: '15.00'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "5 & 7",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 55',
                match: 'KXIP vs CSK',
                result: "Top Scorers - Gayle & NA"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "M Agrawal & DuPlesis",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Neeraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Pratik',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "Gayle & NA",
                    holdingValue: '5.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Match 56',
                match: 'MI vs KKR',
                result: "Powerplay Boundaries 9-CANC & Total Wickets 8"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "15 & 10",
                    holdingValue: '20.00'
                },
                {
                    name: 'Kailash',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Suraj',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neeraj',
                    bet: "19 & 13",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Snehal',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Manasi',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Radhika',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Shruti',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Param',
                    bet: "24 & 14",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Pratik',
                    bet: "26 & 14",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Tushar',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Neha',
                    bet: "NA",
                    holdingValue: '0'
                },
                {
                    name: 'Siddhu',
                    bet: "18 & 15",
                    holdingValue: '-5.00'
                },
                {
                    name: 'Poonam',
                    bet: "NA",
                    holdingValue: '0'
                }
            ]
        },
        {
            matchFixtures: {
                sequence: 'Qualifier 1',
                match: 'MI vs CSK',
                result: "Match Winner MI & Highest Scorer- S Yadav"
            },
            contestantStats: [
                {
                    name: 'Kalpesh',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                },
                {
                    name: 'Kailash',
                    bet: "CSK & Rayadu & Participation=+13.33",
                    holdingValue: '-6.67'
                },
                {
                    name: 'Suraj',
                    bet: "CSK & Raina & Participation=+13.33",
                    holdingValue: '-6.67'
                },
                {
                    name: 'Neeraj',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                },
                {
                    name: 'Pooja',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                },
                {
                    name: 'Snehal',
                    bet: "CSK & Watson & Participation=+13.33",
                    holdingValue: '-6.67'
                },
                {
                    name: 'Manasi',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                },
                {
                    name: 'Radhika',
                    bet: "CSK & NA & Participation=+13.33",
                    holdingValue: '3.33'
                },
                {
                    name: 'Shruti',
                    bet: "CSK & Watson & Participation=+13.33",
                    holdingValue: '-6.67'
                },
                {
                    name: 'Param',
                    bet: "MI & Dcock & Participation=+13.33",
                    holdingValue: '23.33'
                },
                {
                    name: 'Pratik',
                    bet: "CSK & Watson & Participation=+13.33",
                    holdingValue: '-6.67'
                },
                {
                    name: 'Tushar',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                },
                {
                    name: 'Neha',
                    bet: "MI & S Yadav & Participation=+13.33",
                    holdingValue: '103.33'
                },
                {
                    name: 'Siddhu',
                    bet: "MI & Rohit & Participation=+13.33",
                    holdingValue: '23.33'
                },
                {
                    name: 'Poonam',
                    bet: "NA Fine Amount = -20",
                    holdingValue: '-20.00'
                }
            ]
        },

    ]

    getOverallIPLStats() {
        return this.overallIPLStats;
    }

}