import MealsSummary from './MealsSummary/MealsSummary';
import AvailableMeals from './AvailableMeals/AvailableMeals';
import React from 'react';

const Meals = () => {
    return(
        <React.Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </React.Fragment>
    )
};

export default Meals;