const Header = () => {
  return (
    <div className="text-center text-dark">
      <a className="brand-logo d-inline-block" href="/">
        <img className="brand-logo" src="todoctive-brand.svg" alt="brand" style={{ height: "2rem" }} />
      </a>
      <p className="fw-normal mt-2">Aplikasi To-Do List yang Membuatmu Produktif</p>
    </div>
  );
};

export default Header;
