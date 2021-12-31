

const int analogInPin = A0;
int arr[1000];
int sensorValue = 0;
int arrCounter = 0;

void setup() {
  Serial.begin(115200);
 
}

void loop() {
  
  if(arrCounter >= 1000){
    arrCounter = 0;
    for(int i = 0 ; i < 1000 ;i+=100){
      Serial.print(arr[i]);
      Serial.print(" ");
    }
    Serial.println(" ");
  }
  sensorValue = analogRead(analogInPin);
  arr[arrCounter] = sensorValue;
  
  // print the results to the Serial Monitor:
//  
//  Serial.print("sensor = ");
//  Serial.println(sensorValue);

  arrCounter++;
  delay(1);
}
