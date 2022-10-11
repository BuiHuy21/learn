import { Pagination, Row, Col } from "antd";

const PaginationMovies = (props) => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Pagination
          style={{ textAlign: "center", marginBottom: "30px" }}
          pageSize={props.pageSize}
          current={props.current}
          total={props.total}
          onChange={(p) => props.changPage(p)}
        />
      </Col>
    </Row>
  );
};
export default PaginationMovies;
