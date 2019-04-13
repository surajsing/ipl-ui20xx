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

    ]

    getOverallIPLStats() {
        return this.overallIPLStats;
    }

}