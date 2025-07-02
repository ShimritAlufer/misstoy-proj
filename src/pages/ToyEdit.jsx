export function ToyEdit() {
  return (
    <section>
      <h2>Edit Toy</h2>
      <form>
        <label>Name: <input type="text" /></label>
        <label>Price: <input type="number" /></label>
        <label>In Stock: <input type="checkbox" /></label>
        <button>Save</button>
      </form>
    </section>
  )
}
