<?php

namespace Test;

/**
 * Class UnitTest
 */
class UnitTest extends \Phalcon\Test\UnitTestCase
{
    public function testTestCase()
    {
        $this->assertEquals(
            "works",
            "works",
            "This is OK"
        );

        $this->assertEquals(
            "works",
            "works1",
            "This will fail"
        );
    }
}