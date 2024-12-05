class Head(nn.Module):
    """ Self Attention Head"""
    def __init__(self, head_size):
        super().__init__()
        self.Wk = nn.Linear(NUM_OF_EMBEDDING_DIMENSION, head_size, bias=False)
        self.Wq = nn.Linear(NUM_OF_EMBEDDING_DIMENSION, head_size, bias=False)
        self.Wv = nn.Linear(NUM_OF_EMBEDDING_DIMENSION, head_size, bias=False)
        self.register_buffer('tril', torch.tril(torch.ones(BLOCK_SIZE, BLOCK_SIZE)))
        self.dropout = nn.Dropout(DROPOUT)

    def forward(self, x):
        B,T,C = x.shape
        K = self.Wk(x) # (B, T, 16)
        Q = self.Wq(x) # (B, T, 16)
        V = self.Wv(x) # (B, T, 16)
        
        # Transpose K (last 2 dimension)
        KT = K.transpose(-2, -1) 
        
        weight = torch.matmul(Q, KT) * K.shape[-1] ** -0.5
        weight = weight.masked_fill(self.tril[:T, :T] == 0, float('-inf'))
        weight = F.softmax(weight, dim=-1)
        weight = self.dropout(weight)
        context_vector = torch.matmul(weight, V)
        return context_vector
    
class MultiHeadAttention(nn.Module):
    """ Multi Head Self Attention"""
    def __init__(self, num_heads, head_size):
        super().__init__()
        self.heads = nn.ModuleList([Head(head_size) for _ in range(num_heads)])
        self.projection = nn.Linear(head_size * num_heads, NUM_OF_EMBEDDING_DIMENSION)
        self.dropout = nn.Dropout(DROPOUT)

    def forward(self, x):
        attention_output = torch.cat([head(x) for head in self.heads], dim=-1)
        attention_output = self.dropout(self.projection(attention_output))
        return attention_output