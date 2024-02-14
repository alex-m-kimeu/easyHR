/* eslint-disable react/prop-types */


function Search({ search, setSearch  }) {
    return (
        <div>
        <input
        className="mb-4 w-full px-3 py-2 bg-green rounded-md text-sm text-white placeholder-white outline-none"
        type="text" 
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."/>
        </div>
    );
}

export default Search;