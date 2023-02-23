pragma solidity >=0.4.21 <0.6.0;

contract Tether {
  string public name = 'Tether';
  string public symbol = 'USDT';
  uint256 public totalSupply = 1000000000000000000000000;  // 토큰 100만개
  uint8 public decimals = 18;
}