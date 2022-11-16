export class TennisGame {
    socre: string = '';

    getScore(player1Name: string,
             player2Name: string,
             m_score1: number,
             m_score2: number){
        
        let tempScore = 0

        if(m_score1 == m_score2) {
            switch (m_score1){
                case 0:
                    this.socre = "Love-all";
                    break;
                case 1:
                    this.socre = "Fifteen-all";
                    break;
                case 2:
                    this.socre = "Thirty-all";
                    break;
                case 3:
                    this.socre = "Sixty-all";
                    break;
                case 4:
                    this.socre = "Forty-all";
                    break;
            }
        }
        else if (m_score1 >= 4 || m_score2 >= 4) {
            let minusResult = m_score1 - m_score2;
            if (minusResult == 1) this.socre = "Advantage player1";
            else if (minusResult == -1) this.socre = "Advantage player2";
            else if (minusResult >= 2) this.socre = "Win for player1";
            else this.socre = "Win for player2";
        } else {
            for (let i = 1; i < 3; i++) {
                if (i == 1) tempScore = m_score1;
                else {
                    this.socre += "-";
                    tempScore = m_score2;
                }
                switch (tempScore) {
                    case 0:
                        this.socre += "Love";
                        break;
                    case 1:
                        this.socre += "Fifteen";
                        break;
                    case 2:
                        this.socre += "Thirty";
                        break;
                    case 3:
                        this.socre += "Forty";
                        break;
                }
            }
        }
    }
}
let game = new TennisGame();
game.getScore('player1', 'player2', 6, 8);
console.log(game.socre)