import { Injectable } from "@angular/core";

export interface PredictionRules {
    id : number,
    rule : string
}

@Injectable({
    providedIn : 'root'
})
export class PredictionRuleBookData {

    constructor(){
    }

    publishRules : PredictionRules[] = [
        {
            id : 1,
            rule : 'Predictions must be published before toss if players are not chosen in betting.'
        },
        {
            id : 2,
            rule : 'In case of players selection in betting, we can wait for final playing eleven declared after toss.'
        },
        {
            id : 3,
            rule : 'Once predictions published in group, any prediction given by anyone after that, will not be entertained.'
        },
        {
            id : 4,
            rule : 'Everyone must take part, else his/her betting amount of that match will be simply distributed among other participant.'
        }
    ]

    predictionRules : PredictionRules[] = [
        {
            id : 1,
            rule : 'Winning Team.'
        },
        {
            id : 2,
            rule : 'Total Boundaries in both innings (All fours and sixes).'
        },
        {
            id : 3,
            rule : 'Total fourse and sixes in both innings.'
        },
        {
            id : 4,
            rule : 'Total number of wickets in both innings.'
        },
        {
            id : 5,
            rule : 'Total runs in power play of each team.'
        },
        {
            id : 6,
            rule : 'Total number of wickets in power play of each team.'
        },
        {
            id : 7,
            rule : 'Can choose two batsman of each team for higher score (addition of both batsman runs).'
        },
        {
            id : 8,
            rule : 'Can choose two ballers of each teams for maximum wickets (addition of both ballers wicket).'
        }
    ]

    getPublishRules(){
        return this.publishRules;
    }

    getPredictionRules(){
        return this.predictionRules;
    }

}