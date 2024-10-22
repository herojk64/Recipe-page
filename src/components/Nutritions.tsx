import './nutritions.scss'

export const Nutritions = () => {
  return (
    <article className='section__nutritions'>
      <header>Nutrition</header>

      <p>
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Calories</th>
            <td>277kcal</td>
          </tr>
          <tr>
            <th>Carbs</th>
            <td>0g</td>
          </tr>
          <tr>
            <th>Protein</th>
            <td>20g</td>
          </tr>
          <tr>
            <th>Fat</th>
            <td>22g</td>
          </tr>
        </tbody>
      </table>
    </article>
  )
}
