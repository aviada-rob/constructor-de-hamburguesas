import './App.css';
import React from 'react';
import Header from './components/Header';
import HamburguerView from './components/HamburguerView';
import CostViewer from './components/CostViewer';
import IngredientsList from './components/IngredientsList';
import { Grid, Container, Button, Card, CardContent } from '@material-ui/core';
import PlusOneIcon from '@material-ui/icons/PlusOne';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('El componente se cargó');
    this.ingredients = [
      {
        id: 'bun-top',
        ingredient: 'Pan Arriba',
        cost: 15,
        calories: 130,
        classes: 'bun top'
      },
      {
        id: 'bun-bottom',
        ingredient: 'Pan Abajo',
        cost: 15,
        calories: 130,
        classes: 'bun bottom'
      },
      {
        id: 'patty',
        ingredient: 'Carne',
        cost: 30,
        calories: 330,
        classes: 'patty'
      },
      {
        id: 'lettuce',
        ingredient: 'Lechuga',
        cost: 5,
        calories: 5,
        classes: 'lettuce'
      },
      {
        id: 'cheese',
        ingredient: 'Queso',
        cost: 10,
        calories: 80,
        classes: 'cheese'
      },
      {
        id: 'ketchup',
        ingredient: 'Ketchup',
        cost: 3,
        calories: 40,
        classes: 'ketchup'
      }
    ];

    //Application State
    this.state = {
      allMyIngredients: []
    };

    //Binds - para poder usar this en las funciones
    this.addIngredient = this.addIngredient.bind(this);
    this.startOver = this.startOver.bind(this);
  }
  
  componentDidMount() {
    console.log('El componente se ha montado');
  }

  addIngredient(ingredient) {
    let currentIngredients = this.state.allMyIngredients;
    currentIngredients.push(ingredient);
    //Actualiza el nodo selectedIngredient en el estado
    this.setState({
      allMyIngredients: currentIngredients
    });
  }

  startOver() {
    this.setState({
      allMyIngredients: []
    });
  }

  render () {
    return (
      <Container className="App">
        <Header title='Mi hamburguesa'/>
        <Grid container spacing={ 2 }>
          <Grid item sm={ 12 } md={ 6 } className='ingredients-form'>
            <Card raised>
              <CardContent>
                <h2>Selecciona un ingrediente</h2>
                <div>
                  {
                    this.ingredients.map(item=>(
                      <Button
                        key={ item.id }
                        value={ item.id} 
                        onClick={ () => this.addIngredient(item) }
                        variant='contained'
                        color='default'
                        size='large'
                        className='ingredient'
                      >
                        <PlusOneIcon />
                        { item.ingredient }
                      </Button>  
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={ 12 } md={ 6 }>
            <Card raised>
              <CardContent>
                <CostViewer ingredients={ this.state.allMyIngredients }/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={ 12 } md={ 4 }>
            <Card raised>
              <CardContent>
                <IngredientsList ingredients={ this.state.allMyIngredients } startOver={ this.startOver }/>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={ 12 } md={ 8 }>
            <Card raised>
              <CardContent>
                <HamburguerView ingredients={ this.state.allMyIngredients }/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
