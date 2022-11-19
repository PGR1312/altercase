var small=['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','n', 'm', 'o', 'p', 'q', 'r','s', 'd', 'u', 'v', 'w', 'x','y', 'z'];
var big=['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','N', 'M', 'O', 'P', 'Q', 'R','S', 'D', 'U', 'V', 'W', 'X','Y', 'Z'];
var str='GoKuLrAj';
var temp=''
for(i=0;i<str.length;i++)
{
    for(j=0;j<small.length;j++)
    {
        if(str[i]==small[j])
        {
            temp=temp+big[j]
        }
        else if(str[i]==big[j])
        {
            temp=temp+small[j]
        }
    }
}
console.log(temp);