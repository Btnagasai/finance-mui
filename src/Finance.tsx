
import { Box, Typography, Paper } from '@mui/material';
import { Home, SwapVert, PieChart, LocalAtm, Receipt, ArrowBack } from '@mui/icons-material';

const Finance = () => {
  return (
    <Box className="flex min-h-screen bg-[#f8f5f0] justify-center items-center p-4">
      <Box className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl w-full bg-white p-5 shadow-lg rounded-xl">
        
        {/* Sidebar */}
        <Box className="hidden lg:block p-6 bg-black text-white rounded-lg">
          <Typography variant="h4" fontWeight="bold" mb={8}>
            Finance
          </Typography>
          {/* Sidebar items */}
          <Box className="flex flex-col flex-grow space-y-4">
            <Box className="flex items-center">
              <Home sx={{ mr: 1 }} />
              <Typography variant="h6">Overview</Typography>
            </Box>
            <Box className="flex items-center">
              <SwapVert sx={{ mr: 1 }} />
              <Typography variant="h6">Transactions</Typography>
            </Box>
            <Box className="flex items-center">
              <PieChart sx={{ mr: 1 }} />
              <Typography variant="h6">Budgets</Typography>
            </Box>
            <Box className="flex items-center">
              <LocalAtm sx={{ mr: 1 }} />
              <Typography variant="h6">Pots</Typography>
            </Box>
            <Box className="flex items-center">
              <Receipt sx={{ mr: 1 }} />
              <Typography variant="h6">Recurring Bills</Typography>
            </Box>
          </Box>

          {/* Minimize Menu at the bottom */}
          <Box className="flex mt-4">
            <ArrowBack sx={{ mr: 1 }} />
            <Typography variant="h6">Minimize Menu</Typography>
          </Box>
        </Box>
       
        {/* Main Content */}
        <Box className="col-span-3 grid p-6 space-y-6">
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Overview
          </Typography>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Box className="bg-black text-white p-6 shadow-md rounded-md">
              <Typography variant='h5'>Current Balance</Typography>
              <Typography fontWeight="bold" sx={{ fontSize: { sm: '25px', lg: '30px' } }}>$4,836.00</Typography>
            </Box>

            <Paper className="bg-white p-6 shadow-md rounded-md">
              <Typography variant='h5'>Income</Typography>
              <Typography fontWeight="bold" sx={{ fontSize: { sm: '25px', lg: '30px' } }}>$3,814.25</Typography>
            </Paper>

            <Paper className="bg-white p-6 shadow-md rounded-md">
              <Typography variant='h5'>Expenses</Typography>
              <Typography fontWeight="bold" sx={{ fontSize: { sm: '25px', lg: '30px' } }}>$1,700.50</Typography>
            </Paper>
          </Box>

          {/* Additional content */}
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Box className="bg-white shadow-2xl rounded-2xl col-span-2 p-4">
              <Box className="flex flex-col">
                <Box className="flex justify-between">
                  <Typography className="font-bold">Pots</Typography>
                  <Typography className="text-gray-400 text-sm">See Details &gt;</Typography>
                </Box>
                <Box className="grid grid-cols-2 gap-2 pt-5">
                  <Box className="flex gap-2 bg-[#f8f5f1] p-5 rounded-xl">
                    <LocalAtm />
                    <Box>
                      <p className='text-gray-500 text-sm'>Total Saved</p>
                      <div className='font-bold text-[20px] lg:[30px]'>$850</div>
                    </Box>
                  </Box>
                  <Box className="grid grid-cols-2 row-span-2 m-auto gap-2">
                    <Box className="border-l-4 mb-1 border-[#6c9e98] pl-2">
                      <p className="text-[10px]">Savings</p>
                      <div className='font-bold'>$159</div>
                    </Box>
                    <Box className="border-l-4 mb-1 border-[#94d0db] pl-2">
                      <p className="text-[10px]">Gift</p>
                      <div className='font-bold'>$40</div>
                    </Box>
                    <Box className="border-l-4 mb-1 border-[#615f6b] pl-2">
                      <p className="text-[10px]">Concert Ticket</p>
                      <div className='font-bold'>$40</div>
                    </Box>
                    <Box className="border-l-4 mb-1 border-[#f2d0b9] pl-2">
                      <p className="text-[10px]">New Laptop</p>
                      <div className='font-bold'>$10</div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="bg-white shadow-2xl rounded-2xl col-span-2 row-span-3 p-4">
              <Box className="flex justify-between">
                <h1 className='font-bold text-[25px]'>Budgets</h1>
                <div className='text-gray-400  text-sm'>See Details &gt;</div>
              </Box>
                <img src="/assets/Budget.png" alt="Budget" />
              
            </Box>
            <Box className="bg-white shadow-2xl rounded-2xl col-span-2 row-span-6 p-5 ">
            <div className='flex flex-col gap-2 '>
              <div className='flex justify-between'>
                <div className='font-bold text-lg'>Transaction</div>
                <div className='text-gray-400 text-sm'>view all &gt;</div>
              </div>
             <div className='flex justify-between pt-5 pb-1'>
              <div className='flex gap-2'>
                <img src="/assets/image.avif" alt="" className='rounded-full w-10 h-10' />
                <div className='m-auto text-sm'>Emma Richadson</div>
              </div>
              <div className='flex flex-col text-sm  ' >
                <div className='text-[#277C78] text-[14px] font-bold'>+$75.50</div>
                <div className='text-[12px] text-[#696969]'>19-Aug-2024</div>
              </div> 
             
             </div>
             <hr />
             <div className='flex justify-between pt-5 pb-1'>
              <div className='flex gap-2'>
                <img src="/assets/personal.avif" alt="" className='rounded-full w-10 h-10' />
                <div className='m-auto text-sm'>Savory Bites Bistro</div>
              </div>
              <div className='flex flex-col text-sm'>
                <div className=' text-[14px] font-bold'>+$55.50</div>
                <div className='text-[12px] text-[#696969]'>19-Aug-2024</div>
              </div> 
             </div>
             <hr/>
             <div className='flex justify-between pt-5 pb-1 '>
             <div className='flex gap-2'>
              <img src="/assets/danel.avif" alt="" className='rounded-full w-10 h-10' />
              <div className='m-auto text-sm'>Daniel Carter</div>
              </div>
              <div className='flex flex-col text-sm'>
                <div className=' text-[14px] font-bold'>+$42.50</div>
                <div className='text-[12px] text-[#696969]'>18-Aug-2024</div>
              </div> 
             </div>
             <hr/>
             <div className='flex justify-between pt-5 pb-1'>
             <div className='flex gap-2'>
              <img src="/assets/image4.avif" alt="" className='rounded-full w-10 h-10' />
              <div className='m-auto text-sm'>Sun Park</div>
              </div>
              <div className='flex flex-col text-sm'>
                <div className='text-[#277C78] text-[14px] font-bold'>+$120.00</div>
                <div className='text-[12px] text-[#696969]'>17-Aug-2024</div>
              </div> 
             </div>
             <hr/>
             <div className='flex justify-between pt-5 pb-1'>
             <div className='flex gap-2'>
                <img src="/assets/image5.avif" alt="" className='rounded-full w-10 h-10' />
                <div className='m-auto text-sm'>Urban Services Hub</div>
                </div>
              <div className='flex flex-col text-sm'>
                <div className=' text-[14px] font-bold'>+$75.50</div>
                <div className='text-[12px] text-[#696969]'>10-Aug-2024</div>
              </div> 
             </div>
             </div>
            </Box>
          
            <Box className="bg-white shadow-2xl rounded-2xl col-span-2 row-span-4  p-5">  
              <Box className="flex  justify-between  pb-[30px] pt-[15px]">
                <h1 className='font-bold text-lg'>Recurring Bills</h1>
                <div className='text-sm text-gray-400'>See Details &gt;</div>
              </Box>
              <Box className="flex flex-col gap-4">
              <Box className="flex justify-between items-center bg-[#f8f5f1] pl-[16px] pr-[16px] pt-[20px] pb-[20px] border-l-4 bg-beige-100 rounded-[8px] border-l-[#277C78]">
                <p className="text-[14px] leading-[150%] tracking-[0px] font-sans text-gray-500 font-normal">Paid Bills</p>
                <p className="text-[14px] leading-[150%] tracking-[0px] font-bold font-sans">$190.00</p>
                
              </Box>
              <Box className="flex justify-between items-center bg-[#f8f5f1] pl-[16px] pr-[16px] pt-[20px] pb-[20px]  border-l-4 bg-beige-100 rounded-[8px] border-l-[#f3ccac]">
                <p className="text-[14px] leading-[150%] tracking-[0px] font-sans text-gray-500 font-normal">Total Upcoming</p>
                <p className="text-[14px] leading-[150%] tracking-[0px] font-bold font-sans">$194.98</p>
                
              </Box>
              <Box className="flex justify-between items-center bg-[#f8f5f1] pl-[16px] pr-[16px] pt-[20px] pb-[20px] border-l-4 bg-beige-100 rounded-[8px] border-l-[#8ad3e1]">
                <p className="text-[14px] leading-[150%] tracking-[0px] font-sans text-gray-500 font-normal">Due Soon</p>
                <p className="text-[14px] leading-[150%] tracking-[0px] font-bold font-sans">$59.98</p>
                
              </Box>
            </Box>
            </Box>
          </Box>
            
            

        </Box>
      </Box>
    </Box>
    
  );
};

export default Finance;
