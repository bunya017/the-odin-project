def caesar_cipher(str, shift)
  nums = ('a'..'z').to_a()
  cipher = ''
  str.each_char do |chr|
    if nums.none?(chr.downcase)
      cipher << chr
      next
    end
    s_index = nums.index(chr.downcase) + shift
    if (s_index + shift) > 25
      s_index -= 26
    end
    if chr == chr.upcase
      cipher << nums[s_index].upcase
    else
      cipher << nums[s_index]
    end
  end
  return cipher
end