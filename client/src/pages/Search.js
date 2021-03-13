import React, { Component } from "react"

class Search extends Component {
    handleInputChange = (e) => {
        this.setState({
          search: e.target.value.trim()
        })
      }
    
      handleSubmit = (e) => {
        const filterEmployee = this.state.results.filter((employee) => {
          return employee.name.first.includes(this.state.search) || employee.name.last.includes(this.state.search)
        })
        this.setState({
          filteredResults: filterEmployee
        })
      }
      render (){

      
return (
    <>
    Search
    </>
)
      }
}

export default Search;
