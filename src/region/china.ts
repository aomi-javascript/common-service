import {provinces} from './provinces';
import {cities} from './cities';
import {counties} from './counties';


export {
  provinces,
  cities,
  counties
}

export const china = provinces.map((province, pIdx) => ({
  label: province.name,
  value: province.name,
  code: province.code,
  children: cities.filter(city => {
    const pCode = province.code.substring(0, 5)
    return city.code.startsWith(pCode)
  }).map(city => {
    const pCode = city.code.substring(0, 5)
    const cCode = city.code.substring(0, 7)
    return {
      label: city.name,
      value: city.name,
      code: city.code,
      children: counties.filter(county => {
        return province.code === city.code ? county.code.startsWith(pCode) : county.code.startsWith(cCode)
      }).map(county => ({
        label: county.name,
        value: county.name,
        code: county.code
      })).sort((a, b) => a.code.localeCompare(b.code))
    }
  }).sort((a, b) => a.code.localeCompare(b.code))
})).sort((a, b) => a.code.localeCompare(b.code))

export default china
