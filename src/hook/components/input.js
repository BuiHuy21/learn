import { Row, Col, Input } from "antd";

const { Search } = Input;

const InputSearchMovies = (props) => {
  return (
    <>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Col span={10} offset={7}>
          <Search
            placeholder="name's movies ..."
            enterButton="Search"
            size="large"
            loading={props.loading}
            onSearch={(val) => props.search(val)}
          />
        </Col>
      </Row>
    </>
  );
};
export default InputSearchMovies;
