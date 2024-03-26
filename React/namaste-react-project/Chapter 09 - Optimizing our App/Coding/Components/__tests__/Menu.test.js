// Integration Testing
import { render, waitFor, fireEvent } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { shimmer_card_unit } from "../../constants";
import { MenuData } from '../../Mocks/MenuData';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "",
        type: "cors",
        json: () => {
            return Promise.resolve(MenuData)
        },
    })
})

test('List of items rendered on menupage', async () => {
    const body = render(
        <StaticRouter>
            <Header />
           <RestaurantMenu />
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu-items")));

    const menu = body.getByTestId("menu-items");
    const menuItemsContainer = Array?.from(menu?.children);
    const menuItemsList = Array?.from(menuItemsContainer[1]?.children);
    expect(menuItemsList?.length).toBe(116);
})

