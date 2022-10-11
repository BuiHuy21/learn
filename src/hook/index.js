import InputSearchMovies from "./components/input";
import ListMovies from "./components/list";
import { searchMovies } from "./services/api";

import { Col, Pagination, Row } from "antd";
import { useState } from "react";

const AppMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [totals, setTotals] = useState(0);
  const [page, setPage] = useState(1);

  const searchMoviesByKeyword = async (nameMovie, p = 1) => {
    if (nameMovie !== "") {
      await setKeyword(nameMovie);
      await setPage(p);
      await setLoading(true);

      const dataMovie = await searchMovies(nameMovie, p);
      if (dataMovie) {
        await setMovies(dataMovie);
        setTotals(dataMovie.total_results);
      }
      await setLoading(false);
    }
  };
  return (
    <>
      <InputSearchMovies search={searchMoviesByKeyword} loading={loading} />
      <ListMovies movies={movies} loading={loading} />
      {movies.length !== 0 && (
        <Row>
          <Col span={20} offset={2}>
            <Pagination
              style={{ textAlign: "center", marginBottom: "30px" }}
              pageSize={20}
              current={page}
              total={totals}
              showSizeChanger={false}
              onChange={(pagessss) => searchMoviesByKeyword(keyword, pagessss)}
            />
          </Col>
        </Row>
      )}
    </>
  );
};
export default AppMovies;
