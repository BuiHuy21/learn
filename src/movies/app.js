import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ListMovies from "./components/List";
import PaginationMovies from "./components/Pagination";
import SwitchLanguage from "./components/SwitchLanguage";
import { popularMovies } from "./services/api";

const AppMoviesPopualr = () => {
  const [loading, setLoading] = useState(false);
  const [listMovies, setListMovies] = useState([]);
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const [totals, setTotals] = useState(0);

  useEffect(() => {
    const getDataFromPopularMovies = async () => {
      setLoading(true);
      const dataMovie = await popularMovies(language, page);
      if (dataMovie) {
        setListMovies(dataMovie.results);
        setTotals(dataMovie.total_results);
      }
      setLoading(false);
    };
    getDataFromPopularMovies();
  }, [language, page]);

  const changLanguage = (lang) => {
    if (lang !== "") setLanguage(lang);
  };

  const changPage = (p) => {
    if (p > 0 && p < totals) setPage(p);
  };
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <SwitchLanguage changLanguage={changLanguage} />
          <ListMovies listMovies={listMovies} loading={loading} />
          {listMovies.length > 0 && (
            <PaginationMovies
              current={page}
              pageSize={20}
              total={totals}
              changPage={changPage}
            />
          )}
        </Col>
      </Row>
    </>
  );
};
export default AppMoviesPopualr;
