import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it render correctly', async () => {
    render(<Async />)

    // screen.logTestingPlaygroundURL()

    expect(screen.getByText('Hello World')).toBeInTheDocument()
    // expect(await screen.findByText('Button')).toBeInTheDocument()

    waitForElementToBeRemoved(() => screen.queryByText('Button'))

    // await waitFor(() =>{
    //     expect(screen.queryByText('Button')).not.toBeInTheDocument()
    // })
})