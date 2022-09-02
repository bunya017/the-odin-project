class TicTac
  attr_accessor :m, :turn, :board

  def initialize
    puts '===== Tic Tac Toe ====='
    self.board = [1,2,3,4,5,6,7,8,9]
    self.turn = 0
    self.m = 'X'
  end

  def put_marker(index, marker)
    self.board[index] = marker
  end

  def invalid_pos(index)
    return self.board[index] != (index + 1)
  end

  def print_board
    puts "\t#{self.board[0]} | #{self.board[1]} | #{self.board[2]}\n\t- - - - -\n\t#{self.board[3]} | #{self.board[4]} | #{self.board[5]}\n\t- - - - -\n\t#{self.board[6]} | #{self.board[7]} | #{self.board[8]}"
  end

  def get_winner
    perm = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for i in perm
      if (self.board[i[0]] == self.board[i[1]]) && (self.board[i[1]] == self.board[i[2]]) && (self.board[i[2]] == self.m)
        return self.m
      end
    end
    return nil
  end

  def play
    self.print_board
    while self.turn < 10
      puts "Player \"#{self.m}\" turn"
      puts 'Enter position:'
      i = gets.chomp.to_i - 1
      invalid = self.invalid_pos(i)
      while invalid
        puts "Please enter a valid position:"
        i = gets.chomp.to_i - 1
        invalid = self.invalid_pos(i)
      end
      self.put_marker(i, self.m)
      self.print_board
      if self.get_winner
        puts "\nPlayer \"#{self.m}\" wins!!!"
        break
      end
      self.m = self.m == 'X' ? 'O' : 'X'
      self.turn += 1
    end
  end
end

game  = TicTac.new
game.play
