// Integration Testing
import Body from '../Body';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { shimmer_card_unit } from "../../constants";
import { RestaurantData } from '../../Mocks/RestaurantData';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "",
        type: "cors",
        json: () => {
            return Promise.resolve(RestaurantData)
        },
    })
})

test('Search results shimmer on homepage', () => {
    const body = render(
        <StaticRouter>
           <Body />
        </StaticRouter>
    );
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(shimmer_card_unit);
})

test('Search results on homepage', async () => {
    const body = render(
        <StaticRouter>
           <Body />
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(20);
})


test('Search for string(food) on homepage', async () => {
    const body = render(
        <StaticRouter>
           <Body />
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");
    fireEvent.change(input, {
        target:{
            value:'Sweets',
        },
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(1);
})

