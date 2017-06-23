<template>
  <div class="container">
    <br>
    <br>
    <div class="row">
      <div class="painel-default">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="control-label">{{ tituloJogo }}</h2>
            <form class="form-inline text-center">
              <div class="form-group">
                <input class="form-control" v-model="novoJogo.casa.gols">
                <label class="control-label">
                  {{ novoJogo.casa.time.nome }}
                  <img :src="novoJogo.casa.time.escudo" class='formato-escudo'>
                </label>
              </div>
              <span>X</span>
              <div class="form-group">
                <label class="control-label">
                  <img :src="novoJogo.fora.time.escudo" class='formato-escudo'>
                  {{ novoJogo.fora.time.nome }}
                </label>
                <input class="form-control" v-model="novoJogo.fora.gols">
              </div>
              <button type="button" class="btn btn-primary" @click="FimJogo">Fim de Jogo</button>
            </form>
          </div>
        </div>
      </div>
    </div>    
    <div class="row">
      <h2 class="text-center">{{ titulo }}</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="coluna in colunas">{{ coluna | nomeProprio }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times">
            <td><img :src="time.escudo" class='formato-escudo'> {{ time.nome }} </img></td>
            <td>{{ time.pontos}}</td>
            <td>{{ time.gm}}</td>
            <td>{{ time.gs}}</td>
            <td>{{ time | saldo }}</td>
          </tr>
        </tbody>
      </table>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
import Time from '../js/time'
export default {
  data () {
    return {
      titulo: 'Tabela de Classificação',
      tituloJogo: 'Próximo Jogo',
      colunas: ['time', 'pontos', 'gols marcados', 'gols sofridos', 'saldo'],
      times: [
        new Time('América MG', require('../assets/america_mg_60x60.png')),
        new Time('Atletico PR', require('../assets/atletico-pr_60x60.png')),
        new Time('Atletico MG', require('../assets/atletico_mg_60x60.png')),
        new Time('Botafogo', require('../assets/botafogo_60x60.png')),
        new Time('Chapecoense', require('../assets/chapecoense_60x60.png')),
        new Time('Curintia', require('../assets/corinthians_60x60.png')),
        new Time('Coritiba', require('../assets/coritiba_60x60.png')),
        new Time('Cruzeiro', require('../assets/cruzeiro_60x60.png')),
        new Time('Figueirense', require('../assets/figueirense_60x60.png')),
        new Time('Flamengo', require('../assets/flamengo_60x60.png')),
        new Time('Fluminense', require('../assets/fluminense_60x60.png')),
        new Time('Grêmio', require('../assets/gremio_60x60.png')),
        new Time('Internacional', require('../assets/internacional_60x60.png')),
        new Time('Palmeiras', require('../assets/palmeiras_60x60.png')),
        new Time('Ponte Preta', require('../assets/ponte_preta_60x60.png')),
        new Time('Santa Cruz', require('../assets/santa_cruz_60x60.png')),
        new Time('Santos', require('../assets/santos_60x60.png')),
        new Time('São Paulo', require('../assets/sao_paulo_60x60.png')),
        new Time('Sport', require('../assets/sport_60x60.png')),
        new Time('Vitória', require('../assets/vitoria_60x60.png'))
      ],
      novoJogo: {
        casa: {
          time: null,
          gols: 0
        },
        fora: {
          time: null,
          gols: 0
        }
      }
    }
  },
  created () {
    let indexCasa = Math.floor(Math.random() * 20)
    let indexFora = Math.floor(Math.random() * 20)
    this.novoJogo.casa.time = this.times[indexCasa]
    this.novoJogo.casa.gols = 0
    this.novoJogo.fora.time = this.times[indexFora]
    this.novoJogo.fora.gols = 0
  },
  methods: {
    FimJogo () {
      let adversario = this.novoJogo.fora.time
      let gols = this.novoJogo.casa.gols
      let golsAdversario = this.novoJogo.fora.gols
      this.novoJogo.casa.time.fimJogo(gols, golsAdversario, adversario)
    }
  },
  filters: {
    saldo (time) {
      return time.gm - time.gs
    },
    nomeProprio (nome) {
      return nome.charAt(0).toUpperCase() + nome.slice(1)
    }
  }
}
</script>
<style scoped>
  .formato-escudo {
    width:30px;
    height:30px;
  }
</style>
