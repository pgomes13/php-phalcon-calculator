class MvcMicroUnitTest extends \Phalcon\Test\UnitTestCase {

    public function testNotFound() {
        $path = '/invalid';
        $mockRequest = $this->getMock("\\Phalcon\\Http\\Request");
        //TODO: Set an invalid URL $path in the mock
        $this->di->set('request', $mockRequest, true);
        include("../index.php");
        //TODO: Assert status is 404
        $this->expectOutputString('');
    }

    public function testAddApi() {
        $rawJson = '{"status":"PROCESSED","data":{"result":20.6}}';
        $path = '/api/add/10/2';
        $mockRequest = $this->getMock("\\Phalcon\\Http\\Request", array(
            "getJsonRawBody"));
        $mockRequest->expects($this->any())
                ->method("getRawBody")
                ->will($this->returnValue($rawJson));
        //TODO: Set the $path in the mock
        $this->di->set('request', $mockRequest, true);
        include("../index.php");
        //TODO: Assert status is 200
        $this->expectOutputString($rawJson);
    }
}