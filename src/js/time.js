var Time = class Time {
  constructor (nome, escudo) {
    this.nome = nome
    this.escudo = escudo
    this.gm = 0
    this.gs = 0
    this.pontos = 0
  }
  atualizaTabela (pontos, gols, golsAdversario) {
    this.pontos = +pontos
    this.gm = +gols
    this.gs = +golsAdversario
  }
  fimJogo (gols, golsAdversario, adversario) {
    if (gols === golsAdversario) {
      this.atualizaTabela(1, gols, golsAdversario)
      adversario.atualizaTabela(1, golsAdversario, gols)
    } else if (gols > golsAdversario) {
      this.atualizaTabela(3, gols, golsAdversario)
      adversario.atualizaTabela(0, golsAdversario, gols)
    } else {
      this.atualizaTabela(0, gols, golsAdversario)
      adversario.atualizaTabela(3, golsAdversario, gols)
    }
  }
}
export default Time
