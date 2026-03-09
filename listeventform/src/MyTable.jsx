export default function MyTable() {
        const data = [
            {id: 1, brand:'현대', model: 'i30'},
            {id: 2, brand:'기아', model: 'K3'},
            {id: 3, brand:'람보르기니', model: 'Aventador'}
        ];

    return (
        <>
            <table>
                <tbody>
                    {
                        data.map(car => <tr key={car.id}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
}