// API Response
const response = [{
  a: 'The title',
  b: 'Description',
  c: '1527517117878',
  d: 'Category'
}]

// How to Adapt (normalize) the API Response
const mapping = {
  a: 'title',
  b: 'description',
  c: 'time',
  d: 'category'
}

const responseAdapter = (response, mapping) => {
  return response.map(item => {
    const normalized = {}
    Object.keys(item).forEach(key => {
      normalized[mapping[key]] = item[key]
    })
    return normalized
  })
}