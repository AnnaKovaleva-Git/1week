type topCarsType = {
    topCars: CarsType[]
}

type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: topCarsType) => {
    return (
        <table>
            <tr>
                <th>Номер</th>
                <th>Производитель</th>
                <th>Модель</th>
            </tr>
            {props.topCars.map((el, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}
